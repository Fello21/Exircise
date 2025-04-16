const addBtn = document.querySelector(".library__edit-add");
const filterBtn = document.querySelector(".library__edit-filter");
const bookList = document.querySelector(".library__list");
const bookItems = document.querySelectorAll(".library__list-item");

addBtn.addEventListener("click", () => {
  let newBookTitle = prompt("Введите название книги");

  if (newBookTitle === "") {
    alert("Вы не ввели название книги");
    return;
  } else if (newBookTitle === null) {
    return;
  } else {
    let newBook = document.createElement("li");
    newBook.textContent = newBookTitle;
    newBook.classList.add("library__list-item");
    bookList.append(newBook);
  }
});
filterBtn.addEventListener("click", () => {
  let marker;
  const bookItems = document.querySelectorAll(".library__list-item");
  const findBookTitle = prompt("Введите название книги");

  if (findBookTitle === null) {
    return;
  }

  for (book of bookItems) {
    book.classList.remove("accent");
  }


  book.classList.remove("accent");
  for (book of bookItems) {
    if (book.textContent === findBookTitle) {
      book.classList.add("accent");
    }
    marker = book.classList.contains("accent");
    if (marker === true) {
      return;
    }
  }

  if (marker === false) {
    alert("Книга не найдена");
  }
});
