function showTemp(response){
  let temperaturElement= document.querySelector("#numbers");
  let temperature = response.data.temperature.current;

temperaturElement.innerHTML=Math.round(temperature);
  
let cityElement = document.querySelector("h1");
let city = response.data.city;
cityElement.innerHTML=city;

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


let form = document.querySelector("form");
form.addEventListener("submit", cityFind);

let button = document.querySelector("#find");
button.addEventListener("click",cityFind);


searchCity("Rome");



