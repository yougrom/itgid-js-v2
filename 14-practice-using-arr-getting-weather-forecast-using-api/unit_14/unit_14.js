const param = {
	"url" : "https://api.openweathermap.org/data/2.5/",
	"appid" : "a316cc86e8b0b6b7394f561f97e066aa"
}

function getWeather() {
  const cityId = document.querySelector('#city').value;
  fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
  .then(weather => {
    return weather.json();
  }).then(showWeather);
};

// функция показа полученной погоды
function showWeather(data) {
	console.log(data);
}

getWeather(); 
document.querySelector('#city').onchange = getWeather;