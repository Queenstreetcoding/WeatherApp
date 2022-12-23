let apiKey = "d491caa2745b3f084379b6tba1a6oba9";
let apiUrl = "https://api.shecodes.io/weather/v1/current?query=Delft&key=d491caa2745b3f084379b6tba1a6oba9&units=metric";


let now = new Date ();
let currentDay = now.getDay ();
if (currentDay < 10){
    currentDay = `0${currentDay}`;
}
let currentMonth = now.getMonth ();
if (currentMonth < 10){
    currentMonth = `0${currentDay}`;
}
let currentYear = now.getFullYear();

dateElement = document.querySelector ("#showDate");
dateElement.innerHTML = `${currentDay}-${currentMonth}-${currentYear}`;


//let day = days[now.getDay()];
//let days = [
  //  "Sunday",
  //  "Monday",
  //  "Tuesday",
  //  "Wednesday",
  //  "Thursday",
  //  "Friday",
  //  "Satureday"
 // ];
  
 // daysElement = document.querySelector (".day-bottom");
 // daysElement.innerHTML = `${day}`;\

