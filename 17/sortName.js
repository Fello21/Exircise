import * as components from "./components.js";

export default function sortName() {
  const product = localStorage.getItem("product");
  const arrayProducts = JSON.parse(product);
  const initialArray = JSON.parse(product);
  
  const sortedArrayProducts = arrayProducts.sort((obj1, obj2) => {
    if (obj1.name > obj2.name) {
      return 1;
    }
    if (obj1.name < obj2.name) {
      return -1;
    }
    return 0;
  });

  const tableBody = document.querySelector("tbody");

  if (tableBody.getAttribute("data-js-sortname") == "" || null) {
    tableBody.innerHTML = "";
    tableBody.setAttribute("data-js-sortname", "a->z");
    for (let item of sortedArrayProducts) {
      components.getRowEl(
        item.name,
        item.place,
        item.weight,
        item.date,
        item.name
      );
    }
  } else if (tableBody.getAttribute("data-js-sortname") == "a->z") {
    tableBody.innerHTML = "";
    tableBody.setAttribute("data-js-sortname", "z->a");
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
  } else if (tableBody.getAttribute("data-js-sortname") == "z->a") {
    tableBody.innerHTML = "";
    tableBody.setAttribute("data-js-sortname", "");

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
