import openAddPage from "./event.js";
import deleteProduct from "./deleteProduct.js";
import sortName from "./sortName.js";
import sortPlace from "./sortPlace.js";
import sortWeight from "./sortWeight.js";
import sortDate from "./sortdate.js";
import createEditPage from "./createEditPage.js"
import saveEdit from "./saveEdit.js";
import search from "./search.js";

function getTableEl() {
  const container = document.querySelector(".container");
  const body = document.querySelector("body");
  const tableEl = document.createElement("table");
  const headTableEl = document.createElement("thead");
  const rowHeadTableEl = document.createElement("tr");

  tableEl.classList.add("container__table");
  headTableEl.classList.add("container__table-head");

  for (let i = 0; i <= 4; i++) {
    const dataRowHeadTableEl = document.createElement("th");
    dataRowHeadTableEl.classList.add("container__table-headtitle");
    if (i == 0) {
      dataRowHeadTableEl.textContent = "Название";
      dataRowHeadTableEl.addEventListener("click", sortName);
    } else if (i == 1) {
      dataRowHeadTableEl.textContent = "Полка";
      dataRowHeadTableEl.addEventListener("click", sortPlace);
    } else if (i == 2) {
      dataRowHeadTableEl.textContent = "Вес";
      dataRowHeadTableEl.addEventListener("click", sortWeight);
    } else if (i == 3) {
      dataRowHeadTableEl.textContent = "Дата";
      dataRowHeadTableEl.addEventListener("click", sortDate);
    }
    rowHeadTableEl.append(dataRowHeadTableEl);
  }

  headTableEl.append(rowHeadTableEl);
  tableEl.append(headTableEl);
  container.append(tableEl);
  body.prepend(container);
}

function getTitleEl(text) {
  const container = document.querySelector(".container");
  const titleEl = document.createElement("h1");
  titleEl.classList.add("container__title");
  titleEl.textContent = text;
  container.append(titleEl);
}

function getButtonAddEl() {
  const container = document.querySelector(".container");
  const buttonAddEl = document.createElement("button");
  buttonAddEl.classList.add("container__buttonAdd");
  buttonAddEl.setAttribute("type", "submit");
  buttonAddEl.textContent = "Добавить запись";
  const isAddPage =
    document.querySelector(".container__title")?.textContent ===
    "Добавить запись";
  if (!isAddPage) {
    container.append(buttonAddEl);
  } else {
    const form = document.querySelector(".container__form");
    form.append(buttonAddEl);
  }

  buttonAddEl.addEventListener("click", openAddPage);
}

function getSaveEditButtonEl(id) {
  const saveEditButtonEl = document.createElement("button");
  saveEditButtonEl.classList.add("container__form-editbutton");
  saveEditButtonEl.textContent = "Сохранить";  
  saveEditButtonEl.addEventListener('click', ()=> saveEdit(id))
  const form = document.querySelector(".container__form");
  form.append(saveEditButtonEl);
}

function getBodyTableEl() {
  const bodyTableEl = document.createElement("tbody");
  const tableEl = document.querySelector(".container__table");
  bodyTableEl.classList.add("container__table-body");
  bodyTableEl.setAttribute("data-js-sortname", "");
  bodyTableEl.setAttribute("data-js-sortplace", "");
  bodyTableEl.setAttribute("data-js-sortweight", "");
  bodyTableEl.setAttribute("data-js-sortdate", "");
  tableEl.append(bodyTableEl);
}

function getRowEl(name, place, weight, date, id) {
  const rowEl = document.createElement("tr");
  rowEl.dataset.id = id;
  rowEl.addEventListener("dblclick", createEditPage);
  const bodyTableEl = document.querySelector(".container__table-body");

  const nameEl = document.createElement("td");
  nameEl.textContent = name;

  const placeEl = document.createElement("td");
  placeEl.textContent = place;

  const weightEl = document.createElement("td");
  weightEl.textContent = weight;

  const dateEl = document.createElement("td");
  dateEl.textContent = date;

  const buttonDelEl = document.createElement("button");
  buttonDelEl.textContent = "Удалить";
  buttonDelEl.setAttribute("id", `${id}`);

  const placeForButton = document.createElement("td");
  placeForButton.append(buttonDelEl);

  rowEl.append(nameEl, placeEl, weightEl, dateEl, placeForButton);
  bodyTableEl.append(rowEl);
  buttonDelEl.addEventListener("click", () => {
    deleteProduct(id);
  });
}

function getFormEl() {
  const container = document.querySelector(".container");
  const formEl = document.createElement("form");
  formEl.classList.add("container__form");
  container.append(formEl);
}

function getInputNameEl() {
  const formEl = document.querySelector(".container__form");
  const inputNameEl = document.createElement("input");
  inputNameEl.setAttribute("placeholder", "Название");
  inputNameEl.setAttribute("required", "");
  inputNameEl.setAttribute("name", "nameprod");
  inputNameEl.setAttribute("type", "text");
  inputNameEl.classList.add("container__form-input");
  formEl.append(inputNameEl);
}

function getInputPlaceEl() {
  const formEl = document.querySelector(".container__form");
  const inputPlaceEl = document.createElement("input");
  inputPlaceEl.setAttribute("placeholder", "Полка");
  inputPlaceEl.setAttribute("required", "");
  inputPlaceEl.setAttribute("name", "place");
  inputPlaceEl.classList.add("container__form-input");
  formEl.append(inputPlaceEl);
}

function getInputWeightEl() {
  const formEl = document.querySelector(".container__form");
  const inputWeightEl = document.createElement("input");
  inputWeightEl.setAttribute("placeholder", "Вес");
  inputWeightEl.setAttribute("required", "");
  inputWeightEl.setAttribute("type", "number");
  inputWeightEl.setAttribute("name", "weight");
  inputWeightEl.classList.add("container__form-input");
  formEl.append(inputWeightEl);
}

function getInputDateEl() {
  const formEl = document.querySelector(".container__form");
  const inputDateEl = document.createElement("input");
  inputDateEl.setAttribute("placeholder", "Дата");
  inputDateEl.setAttribute("required", "");
  inputDateEl.setAttribute("type", "date");
  inputDateEl.setAttribute("name", "date");
  inputDateEl.classList.add("container__form-input");
  formEl.append(inputDateEl);
}

function getSearchEl () {
  const searchEl = document.createElement('input');
  const container = document.querySelector(".container");
  searchEl.classList.add('container__form-input');
  searchEl.setAttribute('id','search');
  searchEl.setAttribute('placeholder','Поиск по складу');
  searchEl.addEventListener('keyup', search)
  container.append(searchEl);
}

function getLoaderEl() {
  const loaderEl = document.createElement('div');
  loaderEl.classList.add('lds-dual-ring');
  return loaderEl;
}

export {
  getTableEl,
  getTitleEl,
  getButtonAddEl,
  getInputNameEl,
  getInputPlaceEl,
  getInputWeightEl,
  getInputDateEl,
  getFormEl,
  getRowEl,
  getBodyTableEl,
  getSaveEditButtonEl,
  getSearchEl,
  getLoaderEl,
};
