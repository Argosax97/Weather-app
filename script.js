const API_KEY = "577d8cc2d9dfa6e004c05fd59b2b6723";
const API = `api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`;
const SearchForm = document.querySelector(".search-container");
const Search = document.querySelector(".search")
const CityName = document.querySelector(".location");
const Weather = document.querySelector(".weather");
const FeelsLike = document.querySelector(".feels-value");
const Humidity = document.querySelector(".humidity-value");
const Wind = document.querySelector(".wind-value");
const Icon = document.querySelector(".icon")

function fetchApi(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            Icon.src ="https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
            CityName.innerHTML = data.name;
            Weather.innerHTML = Math.floor(data.main.temp) + "&#176" + "C";
            FeelsLike.innerHTML = Math.floor(data.main.feels_like) + "&#176" + "C";
            Humidity.innerHTML = data.main.humidity + "%";
            Wind.innerHTML = data.wind.speed + " km/h"
        })
}

let city = "Yerevan"
fetchApi(city);

SearchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const searchValue = Search.value;
    if (searchValue) {
        city = searchValue;
        fetchApi(city);
        Search.value = "";
    }
});

