


function cityFind(event) {
    event.preventdefault();
    let searchInput = document.querySelector("#search-text-input");
    let h1 = document.querySelector("h1");

    h1.innerHTML = searchInput.value;

   
}


let form = document.querySelector("form");
form.addEventListener("submit", city);

let button = document.querySelector("#find");
button.addEventListener("click",cityFind);