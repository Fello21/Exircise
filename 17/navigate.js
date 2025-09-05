import createHomePage from "./homePage.js";
import createAddPage from "./addPage.js";


export default function navigate(page) {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  switch (page) {
    case "add":
      container.classList.remove("homepage");
      container.classList.add("addpage");
      createAddPage();
      break;
    default:
      container.classList.remove("addpage");
      container.classList.add("homepage");
      createHomePage();
  }
}
