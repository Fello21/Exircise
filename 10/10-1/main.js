const conteiner = document.querySelector(".conteiner");
const imgs = document.querySelectorAll("img");

console.log(imgs);


conteiner.removeChild(conteiner.firstChild);

imgs.forEach(img => {   
    img.addEventListener("click", function () {
      conteiner.innerHTML = '';
      const newImg = document.createElement("img");
      newImg.src = img.src;
      conteiner.append(newImg);
    })
  }
)