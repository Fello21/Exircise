const body = document.querySelector('body');
const btnChange = document.querySelector('.btn');

function onLoad() {
  const themePage = localStorage.getItem('theme') ?? 'light';
  body.classList.add(themePage);
  btnChange.innerText = themePage === 'light' ? 'Поменять на темную тему': 'Поменять на светлую';
}

btnChange.addEventListener('click', () => {
  const newTheme = body.classList.toggle('dark');
  console.log(newTheme);

  localStorage.setItem('theme', newTheme ? 'dark':'light')
})



onLoad();