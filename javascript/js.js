let now = new Date ();
let date = now.getDate ();
let year = now.getFullYear ();
let hours = now.getHours (); {
    if (hours < 10) 
    hours = "0" + hours;
  }
let minutes = now.getMinutes ();{
    if (minutes < 10) 
    minutes = "0" + minutes;
  }

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
let month = months [now.getMonth ()];

let currentDate = document.querySelector ("#date");
currentDate.innerHTML = `${date}-${month}-${year}`;

let time = document.querySelector ("#time");
time.innerHTML = `${hours}:${minutes}`;


function showDay (timestamp) {
 let date = new Date (timestamp * 1000);
 let day = date.getDay ();
 let days = ["Sunday", "Monday", "Tueday", "Wedday", "Thuday", "Friday", "Saturday"];
 
 return days[day];
}

function showForecast (response){
  console.log (response.data);
  let forecast = response.data.daily;
  let forecastElement = document.querySelector ("#forecast");
  
  let forecastHTML = `<div class="row">`;
  forecast.forEach (function (forecastDay, index){
    if (index < 5) {
  forecastHTML = forecastHTML + `
      <div class="col-2">
          <div class="day-bottom">
              ${showDay (forecastDay.time)}
          </div>
          <img src="img/${forecastDay.condition.icon}.png" alt="Sunny" class ="imgsmall-bottom" width="80"/>
          <div class="degrees-bottom">
          <span class="degrees-bottom-max">${Math.round(forecastDay.temperature.maximum)}°</span>
          <span class="degrees-bottom-min">${Math.round(forecastDay.temperature.minimum)}°</span>  
      </div>`; }
forecastHTML = forecastHTML + `</div>`;
forecastElement.innerHTML = forecastHTML;
});
}

function getCoordinates (coordinates) {
  let apiKey = "bd79ao40tde3dec118ca46bc3e6dd55f";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${coordinates.longitude}&lat=${coordinates.latitude}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showForecast);
}

function showTemperature (response){
    let cityElement = document.querySelector ("#city");
    let countryElement = document.querySelector ("#country");
    let condition = document.querySelector ("#condition");
    let windElement = document.querySelector ("#wind");
    let humidityElement = document.querySelector ("#humidity");
    let topTemperatureElement = document.querySelector ("#degreesTop");
    let iconElement = document.querySelector ("#main-icon");

    celsiusTemperature = response.data.temperature.current;

    cityElement.innerHTML = response.data.city;
    countryElement.innerHTML = response.data.country;
    condition.innerHTML = response.data.condition.description;
    windElement.innerHTML = Math.round (response.data.wind.speed);
    humidityElement.innerHTML = Math.round (response.data.temperature.humidity);
    topTemperatureElement.innerHTML = Math.round (celsiusTemperature);
    iconElement.setAttribute ("src", `img/${response.data.condition.icon}.png`);

    getCoordinates(response.data.coordinates);
}

function search(city) {
    let apiKey = "bd79ao40tde3dec118ca46bc3e6dd55f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(showTemperature);
  }  

function handleSubmit (event){
    event.preventDefault();
    let cityInputElement = document.querySelector ("#city-input");
    search (cityInputElement.value);
}

let form = document.querySelector ("#search-form");
form.addEventListener ("submit", handleSubmit);

search ("Delft");