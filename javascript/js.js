let dateElement = document.querySelector ("#showDate");

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


dateElement.innerHTML = `${currentDay}-${currentMonth}-${currentYear}`;
