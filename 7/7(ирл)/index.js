const addButton = document.querySelector('.content__add')
const filterButton = document.querySelector('.content__filter')
const heightList = document.querySelector('.content__list')


addButton.addEventListener('click', ()=>{
  const newHeight = prompt('Введите рост ученика')

  if (newHeight > 300) {
    alert('Некорректное значение')
    return;
  }
  if (newHeight === null){
    return;
  }
  
  if(newHeight === ''){
    alert('Вы ничего не ввели!')
    return;
  }

  const newHeightElem = document.createElement('li')
  newHeightElem.textContent = `${newHeight} см`;
  newHeightElem.classList.add('content__list-item')
  heightList.append(newHeightElem);
})

filterButton.addEventListener('click', ()=>{
  const fitlerHeight = prompt('Введите рост для фильтрации');
  const heightElems = document.querySelectorAll('.content__list-item');
  
  for (heightStudent of heightElems) {
    heightStudent.classList.remove('hidden')
    
    let stringHeight = heightStudent.textContent
    let heightValue = stringHeight.split(' ')
    
    if(+heightValue[0]<+fitlerHeight){
      console.log(123);
      
      heightStudent.classList.add('hidden')
    }
  }
})