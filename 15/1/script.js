const searchTitleFilm = document.querySelector(".search__titleFilm");
const searchGenreFilm = document.querySelector(".search__genreFilm");
const searchYearFilm = document.querySelector(".search__yearFilm");
const searchWatchedFilm = document.querySelector(".search__watchedFilm");
function handleFormSubmit(e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const genre = document.getElementById("genre").value;
  const releaseYear = document.getElementById("releaseYear").value;
  const isWatched = document.getElementById("isWatched").checked;

  const film = {
    title: title,
    genre: genre,
    releaseYear: releaseYear,
    isWatched: isWatched,
  };

  addFilm(film);
}

async function addFilm(film) {
  await fetch("https://sb-film.skillbox.cc/films", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      email: "pomah4uk@gmail.com",
    },
    body: JSON.stringify(film),
  });
  renderTable();
}

async function renderTable() {
  console.log(searchTitleFilm.value);
  console.log(searchGenreFilm.value);
  console.log(searchYearFilm.value);
  console.log(searchWatchedFilm.value);

  const filmsResponse = await fetch(
    `https://sb-film.skillbox.cc/films?title=${searchTitleFilm.value}&genre=${searchGenreFilm.value}&releaseYear=${searchYearFilm.value}&isWatched=${searchWatchedFilm.value}`,
    {
      headers: {
        email: "pomah4uk@gmail.com",
      },
    }
  );
  const films = await filmsResponse.json();

  const filmTableBody = document.getElementById("film-tbody");

  // Clear table body first
  filmTableBody.innerHTML = "";

  // Then add new rows
  films.forEach((film) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${film.title}</td>
      <td>${film.genre}</td>
      <td>${film.releaseYear}</td>
      <td>${film.isWatched ? "Да" : "Нет"}</td>
      <td><button class="btnDel" data-id="${film.id}">Удалить</button></td>
    `;
    filmTableBody.appendChild(row);
  });
  createDel();
}

function createDel() {
  const btnsDel = document.querySelectorAll(".btnDel");

  btnsDel.forEach((btn) => {
    btn.addEventListener("click", deleteFilm);
  });
}

async function deleteFilm(e) {
  const id = e.target.dataset.id;
  await fetch(`https://sb-film.skillbox.cc/films/${id}`, {
    method: "DELETE",
    headers: {
      email: "pomah4uk@gmail.com",
    },
  });
  renderTable();
}

document
  .getElementById("film-form")
  .addEventListener("submit", handleFormSubmit);

// Display films on load
renderTable();

const btnDelAll = document.querySelector(".delAll");

btnDelAll.addEventListener("click", async () => {
  await fetch("https://sb-film.skillbox.cc/films", {
    method: "DELETE",
    headers: {
      email: "pomah4uk@gmail.com",
    },
  });
  renderTable();
});

searchTitleFilm.addEventListener("input", () => renderTable());
searchGenreFilm.addEventListener("input", () => {
  renderTable();
});
searchYearFilm.addEventListener("input", () => {
  renderTable();
});
searchWatchedFilm.addEventListener("input", () => {
  renderTable();
});
