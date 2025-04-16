const prods = document.querySelector(".basket__list");

const addProd = document.querySelector(".basket__add");

addProd.addEventListener("click", () => {
  const newProdTitle = prompt("Введите продукт");

  if (newProdTitle === "") {
    alert("Вы ничего не ввели!");
    return;
  }
  if (newProdTitle === null) {
    return;
  }
  const newProd = document.createElement("li");
  newProd.textContent = newProdTitle;
  newProd.classList.add("basket__list-item");
  prods.append(newProd);
  alfabetFilter();
});

function alfabetFilter() {
  let prodListHTML = document.querySelectorAll(".basket__list-item");
  let prodList = [];
  for (let prod of prodListHTML) {
    prodList.push(prod.innerText);
  }

  let newProdList = prodList.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    }
    return 0;
  });

  for (let i = 0; i < prodListHTML.length; i++) {
    prodListHTML[i].innerText = newProdList[i];
  }
}

alfabetFilter();
