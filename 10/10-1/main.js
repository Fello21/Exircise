const conteiner = document.querySelector(".conteiner");
const img1 = document.querySelector(".carousel__1");
const img2 = document.querySelector(".carousel__2");
const img3 = document.querySelector(".carousel__3");


conteiner.removeChild(conteiner.firstChild);


img1.addEventListener("click", function () {
  if (conteiner.children.length != 0) {
    conteiner.removeChild(conteiner.firstChild);
    const img = document.createElement("img");
    img.src = img1.src;
    conteiner.append(img);
  } else {
    const img = document.createElement("img");
    img.src = img1.src;
    conteiner.append(img);
  }
});

img2.addEventListener("click", function () {
  if (conteiner.children.length != 0) {
    conteiner.removeChild(conteiner.firstChild);
    const img = document.createElement("img");
    img.src = img2.src;
    conteiner.append(img);
  } else {
    const img = document.createElement("img");
    img.src = img2.src;
    conteiner.append(img);
  }
});

img3.addEventListener("click", function () {
  if (conteiner.children.length != 0) {
    conteiner.removeChild(conteiner.firstChild);
    const img = document.createElement("img");
    img.src = img3.src;
    conteiner.append(img);
  } else {
    const img = document.createElement("img");
    img.src = img3.src;
    conteiner.append(img);
  }
});