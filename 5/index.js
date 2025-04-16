const addButton = document.querySelectorAll(".container__list-item-button");
const basketList = document.querySelector(".basket__list");
let j = 1;
// debugger;

// for (let i = 0; i < addButton.length; i++) {
//   addButton[i].addEventListener("click", () => {
//     const item = addButton[i].closest(".container__list-item");
//     const itemText = item.querySelector(".container__list-item-text");
//     const valueText = itemText.innerText;
//     const product = document.createElement("li");
//     const counter = document.createElement("span");
//     const counterText = document.createElement("p");
//     counter.innerText = `, ${j}`;
//     counterText.innerText = "шт.";
//     product.innerText = valueText;
//     product.appendChild(counter);
//     product.appendChild(counterText);
//     product.classList.add("basket__list-item");
//     product.classList.add(`product-${i}`);
//     basketList.appendChild(product);
//     console.log(basketList.childNodes);
//   });
// }

