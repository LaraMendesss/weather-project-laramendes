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

function getForecast(city){
  let apiKey= "dda9a648t200432eo3334f85db57e348";
  let apiUrl=`https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(displayForecast);
}


function displayForecast(response) {
console.log(response);

  let days = ["Tue","Wed","Thu","Fri","Sat","Sun","Mon"];
  let forecastHtml="";

  days.forEach(function(day) {
  forecastHtml = forecastHtml + 

  `<div class="weekDays">
     <strong> ${day}| Oct 4</strong>
     <br/>

     <img
       class="clima"
      src="photos/sun.jpg" width="50px"
      />
      <br/>
      28° | 16°
</div>
  </div>`;
});

let forecastElement = document.querySelector("#forecast");
forecastElement.innerHTML= forecastHtml;
}

let form = document.querySelector("form");
form.addEventListener("submit", cityFind);

let button = document.querySelector("#find");
button.addEventListener("click",cityFind);

searchCity("Rome");
displayForecast();

