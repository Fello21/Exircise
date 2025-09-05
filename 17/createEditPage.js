import * as components from "./components.js";

export default function editProduct(e) {
  const editRow = e.target.parentNode;  
  
  const arrayEditCells = editRow.children;

  const id = editRow.dataset.id;  

  const container = document.querySelector(".container");
  container.innerHTML = "";
  container.classList.remove("homepage");
  container.classList.add("addpage");

  components.getTitleEl("Редактировать запись");
  components.getFormEl();
  components.getInputNameEl();
  components.getInputPlaceEl();
  components.getInputWeightEl();
  components.getInputDateEl();
  components.getSaveEditButtonEl(id);

  const arrayInputs = document.querySelectorAll('.container__form-input')
  
  for (let i=0; i<arrayInputs.length; i++) {
      arrayInputs[i].value = arrayEditCells[i].textContent;
  }
}
