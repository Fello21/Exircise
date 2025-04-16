const addNumber = document.querySelector(".add-number");
const findMax = document.querySelector(".find-max");
const findMin = document.querySelector(".find-min");
const numbers = document.querySelector(".numbers");
const minNumber = document.querySelector(".result__min-number");
const maxNumber = document.querySelector(".result__max-number");
const inputNumber = document.querySelector(".input-number");

let numbersArray = [];

addNumber.addEventListener("click", () => {
  if (inputNumber.value === "") {
    alert("Вы не ввели число");
    return;
  } else {
    numbers.textContent += `${inputNumber.value} `;
    numbersArray.push(Number(inputNumber.value));

    inputNumber.value = "";
  }
});

findMin.addEventListener("click", () => {
  let min = numbersArray[0];

  for (let num of numbersArray) {
    if (num < min) {
      min = num;
    }
  }

  minNumber.textContent = `Минимальное число: ${min}`
});

findMax.addEventListener("click", () => {
  let max = numbersArray[0];

  for (let num of numbersArray) {
    if (num > max) {
      max = num;
    }
  }

  maxNumber.textContent = `Максимальное число: ${max}`
});