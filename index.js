


function cityFind(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-text-input");
    let h1 = document.querySelector("h1");
    h1.innerHTML = searchInput.value;
}


let form = document.querySelector("form");
form.addEventListener("submit", cityFind);

let button = document.querySelector("#find");
button.addEventListener("click",cityFind);

function showTemp(response){
  let temperature=response.data.temperature.current;

console.log(response);

}

let searchInput = document.querySelector("#search-text-input");

let city=searchInput.value;
let apiKey= "dda9a648t200432eo3334f85db57e348";
let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

//console.log(apiUrl);

axios.get(apiUrl).then(showTemp);



