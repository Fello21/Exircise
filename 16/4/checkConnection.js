const controller = new AbortController();
const signal = controller.signal


async function checkConnection() {
  const timeStartProcessing = Date.now();
  try {
    const response = await fetch("https://sb-film.skillbox.cc/ping", {
      method: "POST",
    }, {signal});
    console.log(response);

    if (Date.now() - timeStartProcessing > 500 && Date.now() - timeStartProcessing< 1000) {
      throw new Error("Медленное соединение");
    }
    if (Date.now() - timeStartProcessing>1000){
      controller.abort()
      throw new Error('Неполдадки с сетью')
    }
  } catch (err) {
    console.error(err);
  }
}

setInterval(checkConnection, 5000);
