class User {
  constructor(id, name, age){
    this.id = id;
    this.name = name;
    this.age = age;
  }
}

let users=[];

// console.log(users);
const addButton = document.querySelector(".add");
const outputButton = document.querySelector(".output");

addButton.addEventListener("click", () => {
  let name = prompt("Введите имя");
  let yearBorn = +prompt("Введите год рождения");
  let nowaYear = new Date().getFullYear();
  let age = nowaYear-yearBorn;
  const user = new User(users.length + 1, name, age);
  users.push(user);
});

let averageAge;

outputButton.addEventListener("click", () => {
  for (let i = 0; i < users.length; i++) {
    console.log(users[i].id+', ', users[i].name, ', '+users[i].age);
    averageAge = users.reduce((accumulator, user) => accumulator + user.age, 0) / users.length;
  }
  console.log('Средний возраст: '+averageAge);
});
