import navigate from "./navigate.js";

export default function openAddPage() {
  const isAddPage =
    document.querySelector(".container__title")?.textContent ===
    "Добавить запись";
  if (!isAddPage) {
    navigate("add");
  } else {
    const form = document.querySelector(".container__form");
    if (!form.checkValidity()) return;
    const formData = new FormData(form);
    const valueName = formData.get("nameprod");
    const valuePlace = formData.get("place");
    const valueWeight = formData.get("weight");
    const valueDate = formData.get("date");
    const randomId = Date.now().toString(36);

    // Проверка на наличие данных в локальном хранилище, если пустой, то записывается только то что было введено в input'ах
    // Если не пустой, то записывается то что было введено + то что уже было в localStorage
    let arrayProducts = [];
    if (
      localStorage.length === 0 ||
      localStorage.getItem("product").length == 0
    ) {
      arrayProducts.push({
        name: valueName,
        place: valuePlace,
        weight: valueWeight,
        date: valueDate,
        id: randomId,
      });

      localStorage.setItem("product", JSON.stringify(arrayProducts));
    } else {
      arrayProducts = JSON.parse(localStorage.getItem("product"));
      arrayProducts.push({
        name: valueName,
        place: valuePlace,
        weight: valueWeight,
        date: valueDate,
        id: randomId,
      });

      localStorage.setItem("product", JSON.stringify(arrayProducts));
    }

    navigate();
  }
}
