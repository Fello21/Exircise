const list = document.querySelector('.list');
const btn = document.querySelector('.add');
const del = document.querySelector('.del');

btn.addEventListener('click', function(){
  const li = document.createElement('li');
  li.textContent = 'Новый элемент списка'
  list.appendChild(li)
})

del.addEventListener('click', function(){
  list.removeChild(list.lastChild);
})