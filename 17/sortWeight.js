import * as components from "./components.js";

export default function sortWeight() {
  const product = localStorage.getItem("product");
  const arrayProducts = JSON.parse(product);
  const initialArray = JSON.parse(product);
  
  const sortedArrayProducts = arrayProducts.sort((obj1, obj2) => {
    if (obj1.weight > obj2.weight) {
      return 1;
    }
    if (obj1.weight < obj2.weight) {
      return -1;
    }
    return 0;
  });

  const tableBody = document.querySelector("tbody");

  if (tableBody.getAttribute("data-js-sortweight") == "" || null) {
    tableBody.innerHTML = "";
    tableBody.setAttribute("data-js-sortweight", "1->99");
    for (let item of sortedArrayProducts) {
      components.getRowEl(
        item.name,
        item.place,
        item.weight,
        item.date,
        item.name
      );
    }
  } else if (tableBody.getAttribute("data-js-sortweight") == "1->99") {
    tableBody.innerHTML = "";
    tableBody.setAttribute("data-js-sortweight", "99->1");
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
  } else if (tableBody.getAttribute("data-js-sortweight") == "99->1") {
    tableBody.innerHTML = "";
    tableBody.setAttribute("data-js-sortweight", "");

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