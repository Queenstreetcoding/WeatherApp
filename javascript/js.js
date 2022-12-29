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
let days = ["Sunday", "Monday", "Tueday", "Wedday", "Thuday", "Friday", "Saturday"];
let day = days [now.getDay()];

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
let month = months [now.getMonth ()];

let currentDate = document.querySelector ("#date");
currentDate.innerHTML = `${date}-${month}-${year}`;

let time = document.querySelector ("#time");
time.innerHTML = `${hours}:${minutes}`;


function showForecast (){
  let forecastElement = document.querySelector ("#forecast");
  
  let forecastHTML = `<div class="row">`;
  let days = ["Friday", "Saturday", "Sunday", "Monday", "Tuesday"];
  days.forEach (function (day){
  forecastHTML = forecastHTML + `
      <div class="col-2">
          <div class="day-bottom">
              ${day}
          </div>
          <img src="https://img.icons8.com/stickers/200/null/sun.png" alt="Sunny" class ="imgsmall-bottom" width="80"/>
          <div class="degrees-bottom">
          <span class="degrees-bottom-max"> 20°</span>
          <span class="degrees-bottom-min">15° </span>  
      </div>`;
forecastHTML = forecastHTML + `</div>`;
forecastElement.innerHTML = forecastHTML;
});
}


function showTemperature (response){
    let cityElement = document.querySelector ("#city");
    let countryElement = document.querySelector ("#country");
    let condition = document.querySelector ("#condition");
    let windElement = document.querySelector ("#wind");
    let humidityElement = document.querySelector ("#humidity");
    let topTemperatureElement = document.querySelector ("#degreesTop");

    celsiusTemperature = response.data.temperature.current;

    cityElement.innerHTML = response.data.city;
    countryElement.innerHTML = response.data.country;
    condition.innerHTML = response.data.condition.description;
    windElement.innerHTML = Math.round (response.data.wind.speed);
    humidityElement.innerHTML = Math.round (response.data.temperature.humidity);
    topTemperatureElement.innerHTML = Math.round (celsiusTemperature);
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

function fahrenheitConversion (event){
    event.preventDefault ();
    let fahrenheitTemperature = (celsiusTemperature * 9 / 5) + 32;
    let temperatureElement = document.querySelector ("#degreesTop");
    temperatureElement.innerHTML = Math.round (fahrenheitTemperature);
}

function celsiusConversion (event){
    event.preventDefault ();
    let temperatureElement = document.querySelector ("#degreesTop");
    temperatureElement.innerHTML = Math.round (celsiusTemperature);
}

let celsiusTemperature = null;

let form = document.querySelector ("#search-form");
form.addEventListener ("submit", handleSubmit);

search ("Delft");
showForecast ();

let fahrenheitLink = document.querySelector ("#fahrenheit-link");
fahrenheitLink.addEventListener ("click", fahrenheitConversion);

let celsiusLink = document.querySelector ("#celsius-link");
celsiusLink.addEventListener ("click", celsiusConversion);