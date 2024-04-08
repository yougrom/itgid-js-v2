/** City List JS */
const cityList = document.getElementById('city-list');
const select = document.createElement('select');
select.id = 'city';

let options = [
  { value: 2643743, text: 'London' },
  { value: 2950158, text: 'Berlin' },
  { value: 3128760, text: 'Barcelona' },
  { value: 703448, text: 'Kyiv' }
];

for (let i = 0; i < options.length; i++) {
  const option = document.createElement('option');
  option.value = options[i].value;
  option.textContent = options[i].text;
  select.appendChild(option);
};

cityList.appendChild(select);

/** Card */
const param = {
	"url" : "https://api.openweathermap.org/data/2.5/",
	"appid" : "a316cc86e8b0b6b7394f561f97e066aa"
};

function getWeather() {
  const cityId = document.querySelector('#city').value;
  fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
  .then(weather => { 
    return weather.json();
  }).then(showWeather);
};

// функция показа полученной погоды
function showWeather(dataOne) {
	console.log(dataOne);
  document.querySelector('.city-name').innerHTML = dataOne.name;
  document.querySelector('.city-temperature').innerHTML = Math.round(dataOne.main.temp) + '&deg;';
  document.querySelector('.weather-icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${dataOne.weather[0]['icon']}@2x.png">`;
  document.querySelector('.weather-description').textContent = dataOne.weather[0].description;
  document.querySelector('.weather-wind').textContent = dataOne.wind.deg + ' / ' + dataOne.wind.speed;
  document.querySelector('.weather-pressure').textContent = dataOne.main.pressure + ' mbar';
};

getWeather(); 
document.querySelector('#city').onchange = getWeather;
