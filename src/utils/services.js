import { apiInstance } from "./api";

export const apis = {
  removeFromCart: (data) =>
    apiInstance(`/cart`, {
      method: "DELETE",
      body: data,
    }),

  addToCart: (data) =>
    apiInstance(`/cart`, {
      method: "POST",
      body: data,
    }),

  quantityChange: (userId, itemId, qtyChange) =>
    apiInstance(`/cart/${userId}/${itemId}`, {
      method: "PUT",
      body: { qty: qtyChange },
    }),
};
