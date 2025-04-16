const userWord = prompt("Введите слово");

function conterVowels(word) {

  if(word ===''){
    alert('Вы ничего не написали');
    return;
  }
  if(word === null) {
    return;
  }
  
  const letters = word.toLowerCase().split("");
  const isRus = (text) => /[а-я]/i.test(text);
  const rus = isRus(word);
  console.log(rus);


  if (rus === true) {
    alert(
      "Количество гласных в слове: " +
        letters.filter((letter) => "уеэоаыяию".includes(letter)).length
    );
  } else {
    alert(
      "Количество гласных в слове: " +
        letters.filter((letter) => "aeuioy".includes(letter)).length
    );
  }
}

conterVowels(userWord);
