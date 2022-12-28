let now = new Date ();
let date = now.getDate ();
let year = now.getFullYear ();
let hours = now.getHours ();
let minutes = now.getMinutes ();

let days = ["Sunday", "Monday", "Tueday", "Wedday", "Thuday", "Friday", "Saturday"];
let day = days [now.getDay()];

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
let month = months [now.getMonth ()];

let currentDate = document.querySelector ("#date");
currentDate.innerHTML = `${date}-${month}-${year}`;

let time = document.querySelector ("#time");
time.innerHTML = `${hours}:${minutes}`;


function showTemperature (response){
    let cityElement = document.querySelector ("#city");
    let condition = document.querySelector ("#condition");
    let windElement = document.querySelector ("#wind");
    let humidityElement = document.querySelector ("#humidity");
    let topTemperatureElement = document.querySelector ("#degreesTop");

    cityElement.innerHTML = response.data.city;
    condition.innerHTML = response.data.condition.description;
    windElement.innerHTML = Math.round (response.data.wind.speed);
    humidityElement.innerHTML = Math.round (response.data.temperature.humidity);
    topTemperatureElement.innerHTML = Math.round (response.data.temperature);
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