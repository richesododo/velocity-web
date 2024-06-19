/* eslint-disable dot-notation */
import axios from "axios";

function logout() {
  window.localStorage.clear();
}

// // const ERROR_TOAST_MESSAGE_EXCEPTIONS = [
// //   "no keys found for this account",
// //   "invalid token",
// // ];
// const ERROR_TOAST_SEARCH_MESSAGE_EXCEPTION = "invalid page.";
export function apiInstance(
  endpoint,
  { method = "GET", data, body, hideToast, ...customConfig } = {}
) {
  const token = localStorage.getItem("token");
  let url = "";
  const headers = { "content-type": "application/json" };
  if (token) {
    headers.Authorization = `Token ${token}`;
  }

  const config = {
    method,
    data: data || body,
    ...customConfig,
    headers: {
      ...(token && { Authorization: token }),
      ...headers,
      ...customConfig.headers,
    },
  };
  console.log("process.env.REACT_APP_BASE_URL", process.env.REACT_APP_BASE_URL);
  if (!process.env.REACT_APP_BASE_URL) {
    url = endpoint;
  } else {
    url = `${process.env.REACT_APP_BASE_URL}${endpoint}`;
  }

  return axios(url, config)
    .then(async (response) => {
      const data = response.data;
      if (response.statusText) {
        return Promise.resolve({
          ok: response.statusText,
          ...data,
        });
      }
    })
    .catch(async (_err) => {
      let message;
      const errStatus = _err?.response?.status;
      switch (errStatus) {
        case 400:
          message = "Bad Request";
          break;
        case 401:
          logout();
          window.location.assign(window.location);
          message = "You're not Authenticated. Kindly Login";
          break;

        case 404:
          message = "Resource not found";
          break;
        case 500:
          message = "Internal server error";
          break;
        default:
          message = "";
      }

      const errorRes = {
        response: {
          ok: _err?.response?.statusText,
          custom_message: message,
          data: _err?.response?.data,
        },
      };
      await Promise.reject(errorRes);
    });
}

export const apiInstance2 = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
});

export const setToken = (token) => {
  apiInstance.defaults.headers["Authorization"] = `Token ${token}`;
  apiInstance.defaults.withCredentials = false;
};
