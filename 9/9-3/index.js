function createCar (name,hp){
  return {
    carName: name,
    wheels:4,
    doors:4,
    isStarted:false,
    carHp:hp,
  }
}

const newCar = createCar('Kia', 180)

console.log(newCar);
