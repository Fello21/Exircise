function greeting() {
  const username = prompt("Введите имя пользователя");
  if (username == ''){
    const err = new Error('Имя обязательно для заполнения');
    throw err
  }
}
try { 
  greeting();
  throw err
} catch(error) { 
  alert(error.message);
}