function updateWeather(response) {
    console.log("API response received:", response); // Debugging line

    let temperatureElement = document.querySelector("#weather-value");
    let temperature = response.data.daily[0].temperature.day; 
    let cityElement = document.querySelector("#city");

    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
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
