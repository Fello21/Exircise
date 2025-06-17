const assessment = document.querySelector("#assessment");

const valueAssessment = document.querySelector(".form__assessment-value");

const form = document.querySelector('.form')

const btn = document.querySelector('.btn');

const body = document.querySelector('body')


assessment.addEventListener("input", function () {
  valueAssessment.textContent = assessment.value;
});


btn.addEventListener('click', function(){
  const formData = new FormData(form);
  const div = document.createElement('div')
  div.innerHTML= `
  <ul>
  <li>Ваше имя: ${formData.get('name')}</li>
  <li>Ваша почта: ${formData.get('email')}</li>
  <li>Ваш пол: ${formData.get('sex')}</li>
  <li>Ваша оценка сервиса: ${formData.get('assessment')}</li>
  <li>Ваши хобби: ${formData.getAll('hobby')}</li>
  <li>Ваш комментарий: ${formData.get('comment')}</li>
  </ul>
  `;
  body.append(div)

})

