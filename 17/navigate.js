import createHomePage from "./homePage.js";
import {getLoaderEl} from "./components.js";


export default async function navigate(page) {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  const loaderEl = getLoaderEl()
  container.append(loaderEl);
  switch (page) {
    case "add":
      container.classList.remove("homepage");
      container.classList.add("addpage");
      const addPage = await import ('./addPage.js');
      addPage.default()
      loaderEl.remove();
      break;
    default:
      container.classList.remove("addpage");
      container.classList.add("homepage");
      createHomePage();
      loaderEl.remove();
  }
}
