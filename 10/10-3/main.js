const list = document.querySelector(".pricelist");
const asc = document.querySelector(".asc");
const des = document.querySelector(".des");

const prices = [100, 500, 200, 350, 150];

function showPrices(i) {
  list.innerHTML = "";
  for (let item of prices) {
    const li = document.createElement("li");
    li.textContent = `${item} руб.`;
    list.append(li);
  }
}

showPrices();

asc.addEventListener("click", function () {
  prices.sort((a, b) => a - b);
  showPrices();
});

des.addEventListener("click", function () {
  prices.sort((a, b) => b - a);
  showPrices();
});

console.log(prices);
