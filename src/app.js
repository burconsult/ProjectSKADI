import { http } from "./http.js";
import { ui } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  getProducts();
  initCart();
});

function getProducts() {
  http
    .get("http://localhost:3000/products")
    .then((data) => ui.showProducts(data));
}

export function initCart() {
  const cartProductList = JSON.parse(localStorage.getItem("cart"));
  if (!cartProductList) {
    localStorage.setItem("cart", JSON.stringify([]));
  }
}
