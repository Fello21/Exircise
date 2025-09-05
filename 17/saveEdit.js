import navigate from "./navigate.js";

export default function saveEdit(id) {

  const arrayInputs = document.querySelectorAll(".container__form-input");

  const arrayProduct = JSON.parse(localStorage.getItem("product"));


  const newName = arrayInputs[0].value;
  const newPlace = arrayInputs[1].value;
  const newWeight = arrayInputs[2].value;
  const newDate = arrayInputs[3].value;

  const indexObjectForEdit = arrayProduct.findIndex((obj) => {return obj.id === id;});
  arrayProduct[indexObjectForEdit].name = newName;
  arrayProduct[indexObjectForEdit].place = newPlace;
  arrayProduct[indexObjectForEdit].weight = newWeight;
  arrayProduct[indexObjectForEdit].date = newDate;

  localStorage.setItem('product', JSON.stringify(arrayProduct))

  navigate();
}
