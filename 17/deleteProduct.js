export default function deleteProduct(id) {
  const product = localStorage.getItem("product");

  let arrayProducts = JSON.parse(product);

  const newArrayProducts = arrayProducts.filter((item) => item.id !== id);

  localStorage.setItem("product", JSON.stringify(newArrayProducts));

  const buttonClicked = document.querySelector(`#${id}`);
  const rowForDelete = buttonClicked.parentElement.parentElement;
  
  rowForDelete.remove();
}
