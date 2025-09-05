import * as components from "./components.js";

export default function createHomePage() {
  components.getTitleEl("Склад");
  components.getSearchEl();
  components.getButtonAddEl();
  components.getTableEl();
  components.getBodyTableEl();
  if (!localStorage.length == 0) {
    if (localStorage.getItem("product").length == 0) {
      return;
    } else {
      const product = localStorage.getItem("product");

      let arrayProducts = JSON.parse(product);

      for (let product of arrayProducts)
        components.getRowEl(
          product.name,
          product.place,
          product.weight,
          product.date,
          product.id
        );
    }
  }
}
