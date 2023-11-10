let now= new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let day = days[now.getDay()];
let hour = now.getHours();
let minutes = String(now.getMinutes()).padStart(2, "0");

let date = document.querySelector(".date");
date.innerHTML = `${day} ${hour}:${minutes}`;

function showTemp(response){
  let temperaturElement= document.querySelector("#numbers");
  let temperature = response.data.temperature.current;

temperaturElement.innerHTML=Math.round(temperature);
  
let cityElement = document.querySelector("h1");
let city = response.data.city;
cityElement.innerHTML=city;

let humidityElement = document.querySelector("#humidity");
let humidity = response.data.temperature.humidity;
humidityElement.innerHTML=humidity;

let windElement = document.querySelector("#wind");
let wind = Math.round(response.data.wind.speed);
windElement.innerHTML=wind

let iconElement = document.querySelector(".icon");
iconElement.innerHTML= `<img src="${response.data.condition.icon_url}" class="icon"/>`;

let conditionElement = document.querySelector("#condition");
let condition = response.data.condition.description;
conditionElement.innerHTML= condition.charAt(0).toUpperCase()+condition.slice(1);

getForecast(response.data.city);

}

function searchCity(city){
  let apiKey= "dda9a648t200432eo3334f85db57e348";
  let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(showTemp);
}


function cityFind(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-text-input");
    searchCity(searchInput.value);
}

function formatDay(timestamp){
  let date = new Date(timestamp*1000);
  let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  return days[date.getDay()];
}

function getForecast(city){
  let apiKey= "dda9a648t200432eo3334f85db57e348";
  let apiUrl=`https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(displayForecast);
}


function displayForecast(response) {
  
  let forecastHtml="";

  response.data.daily.forEach(function(day, index) {

    if(index<5){
  forecastHtml = forecastHtml + 

  `
  <div class="weekDays">
  <div class="forecast-date">
     <strong> ${formatDay(day.time)}</strong> </div>
   
     <div class="forecast-icon">
     <img
       class="clima"
      src="${day.condition.icon_url}" width="60px"
      /></div>

      <div class="forecast-temperatures">
      <strong class="forecast-max"> ${Math.round(day.temperature.maximum)}° </strong>|<span class=forecast-min"> ${Math.round(day.temperature.minimum)}° </span>
</div>
  </div>
  `;}
});

let forecastElement = document.querySelector("#forecast");
forecastElement.innerHTML= forecastHtml;
}

let form = document.querySelector("form");
form.addEventListener("submit", cityFind);

let button = document.querySelector("#find");
button.addEventListener("click",cityFind);

searchCity("Manhattan");
displayForecast();

