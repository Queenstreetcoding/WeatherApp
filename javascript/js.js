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


let day = days[now.getDay()];
let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Satureday"
  ];
  
  daysElement = document.querySelector (".day-bottom");
  daysElement.innerHTML = `${day}`;