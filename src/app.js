function updateWeather(response) {
    console.log("API response received:", response); // Debugging line

    let temperatureElement = document.querySelector("#weather-value");
    let temperature = response.data.daily[0].temperature.day; 
    let descriptionElement=document.querySelector("#description");
    let humidityElement=document.querySelector("#humidity");
    let windElement=document.querySelector("#wind");
    let cityElement = document.querySelector("#city");
    let timeElement=document.querySelector("#time");
    let date=new Date(response.data.daily[0].time * 1000);
    let emojiElement=document.querySelector("#weather-emoji");

    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
    descriptionElement.innerHTML=response.data.daily[0].condition.description;
    humidityElement.innerHTML=`${response.data.daily[0].temperature.humidity}%`;
    windElement.innerHTML=`${response.data.daily[0].wind.speed}km/h`;
    timeElement.innerHTML=formatDate(date);
    emojiElement.innerHTML=`<img src="${response.data.daily[0].condition.icon_url}" class="weather-emoji"/>`;
}
function formatDate(date){
let minutes=date.getMinutes();
let hours=date.getHours();
let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day=days[date.getDay()];

if (minutes < 10){
    minutes = `0${minutes}`;
}
return `${day} ${hours}:${minutes}`;
}


function searchCity(city) {
    let apiKey = "6b025c7d6331b719f34f6a74oab04ft9";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    

    axios.get(apiUrl).then(updateWeather);
        
}

function manageSearchInput(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", manageSearchInput);
