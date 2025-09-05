import * as components from "./components.js";
export default function search() {
  const tableBody = document.querySelector(".container__table-body");
  const searchElValue = document.querySelector(".container__form-input").value;

  const product = localStorage.getItem("product");
  const arrayProducts = JSON.parse(product);
  tableBody.innerHTML = "";

  for (const obj of arrayProducts) {
    if (obj.name.includes(searchElValue)) {
      components.getRowEl(obj.name, obj.place, obj.weight, obj.date, obj.id);
    }
  }
}
