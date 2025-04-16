const carCollection = {
  BMW: {
    model: "X5",
    wheels: 4,
    doors: 4,
    isStarted: false,
    hp: 160,
  },
  Audi: {
    model: "TT",
    wheels: 4,
    doors: 4,
    isStarted: true,
    hp: 150,
  },
  Kia: {
    model: "Rio",
    wheels: 4,
    doors: 4,
    isStarted: false,
    hp: 170,
  },
  Toyota: {
    model: "Camry",
    wheels: 4,
    doors: 4,
    isStarted: true,
    hp: 200,
  },
};

function getCar(carName) {

  for (let car in carCollection) {
    if (carName === car) {
      return carCollection[car];
    }
  }
}
const carName = getCar('Audi');

console.log(carName);