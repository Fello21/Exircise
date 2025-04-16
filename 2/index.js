const enterButton = document.querySelector('.enterButton');

onEnterButtonClick = () => {
  let poductName = prompt("Введите название товара");
  let poductAmount = prompt("Введите количество товара");
  let poductPrice = prompt("Введите цену товара");
  console.log(poductName, poductAmount + ' шт.', 'цена ' + poductPrice + ' руб.', 'итого: ' + poductPrice*poductAmount);
}

enterButton.addEventListener("click", onEnterButtonClick);
