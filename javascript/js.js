
function showTemperature (response){
    let dateElement = document.querySelector ("#date");
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

function search (city){
    let apiKey = "d491caa2745b3f084379b6tba1a6oba9";
    let apiUrl = `https//api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);    
}

function handleSubmit (event){
    event.preventDefault();
    let cityInputElement = document.querySelector ("#city-input");
    search (cityInputElement.value);
}

let form = document.querySelector ("#search-form");
form.addEventListener ("submit", handleSubmit);

search = ("New York");