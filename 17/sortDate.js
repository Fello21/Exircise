import * as components from "./components.js";

export default function sortDate() {
  const product = localStorage.getItem("product");
  const arrayProducts = JSON.parse(product);
  const initialArray = JSON.parse(product);
  
  const sortedArrayProducts = arrayProducts.sort((obj1, obj2) => {
    if (obj1.date > obj2.date) {
      return 1;
    }
    if (obj1.date < obj2.date) {
      return -1;
    }
    return 0;
  });

  const tableBody = document.querySelector("tbody");

  if (tableBody.getAttribute("data-js-sortdate") == "" || null) {
    tableBody.innerHTML = "";
    tableBody.setAttribute("data-js-sortdate", "1000->2025");
    for (let item of sortedArrayProducts) {
      components.getRowEl(
        item.name,
        item.place,
        item.weight,
        item.date,
        item.name
      );
    }
  } else if (tableBody.getAttribute("data-js-sortdate") == "1000->2025") {
    tableBody.innerHTML = "";
    tableBody.setAttribute("data-js-sortdate", "2025->1000");
    sortedArrayProducts.reverse();

    for (let item of sortedArrayProducts) {
      components.getRowEl(
        item.name,
        item.place,
        item.weight,
        item.date,
        item.name
      );
    }
  } else if (tableBody.getAttribute("data-js-sortdate") == "2025->1000") {
    tableBody.innerHTML = "";
    tableBody.setAttribute("data-js-sortdate", "");

    for (let item of initialArray) {
      components.getRowEl(
        item.name,
        item.place,
        item.weight,
        item.date,
        item.name
      );
    }
  }
}