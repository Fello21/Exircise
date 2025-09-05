import * as components from "./components.js";

export default function sortPlace() {
  const product = localStorage.getItem("product");
  const arrayProducts = JSON.parse(product);
  const initialArray = JSON.parse(product);
  
  const sortedArrayProducts = arrayProducts.sort((obj1, obj2) => {
    if (obj1.place > obj2.place) {
      return 1;
    }
    if (obj1.place < obj2.place) {
      return -1;
    }
    return 0;
  });

  const tableBody = document.querySelector("tbody");

  if (tableBody.getAttribute("data-js-sortplace") == "" || null) {
    tableBody.innerHTML = "";
    tableBody.setAttribute("data-js-sortplace", "a1->z9");
    for (let item of sortedArrayProducts) {
      components.getRowEl(
        item.name,
        item.place,
        item.weight,
        item.date,
        item.name
      );
    }
  } else if (tableBody.getAttribute("data-js-sortplace") == "a1->z9") {
    tableBody.innerHTML = "";
    tableBody.setAttribute("data-js-sortplace", "z9->a1");
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
  } else if (tableBody.getAttribute("data-js-sortplace") == "z9->a1") {
    tableBody.innerHTML = "";
    tableBody.setAttribute("data-js-sortplace", "");

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