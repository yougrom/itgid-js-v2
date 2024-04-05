fetch('https://api.openweathermap.org/data/2.5/weather?id=703448&appid=a316cc86e8b0b6b7394f561f97e066aa')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.package-name').textContent = data.name;
        document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
        //https://openweathermap.org/img/wn/02d@2x.png
        document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {
        // catch any errors
    });

    // https://api.openweathermap.org/data/2.5/weather
    // ?q=Berlin&appid=a316cc86e8b0b6b7394f561f97e066aa — GET Запрос
    // & - Разделитель параметров
    // GET Параметры используется для того чтобы конфигурировать GET запрос.

    // fetch - Это интерфейс джаваскрипт для работы с запросами и ответами HTTP

