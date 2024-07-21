const apikey = "d0cd0dca42a6051efd138f21e9c5c741"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const Searchbox = document.querySelector(".search input")
const btn = document.querySelector(".search button")

const weatherIcon = document.querySelector(".Weather-icon")

async function checkWeather(city) {
    const respose = await fetch(apiUrl + city + `&appid=${apikey}`)

    if (respose.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    } else {
        var data = await respose.json()
    }


    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c"
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %"
    document.querySelector(".Wind").innerHTML = data.wind.speed + " km/h"

    if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "/clouds.png";
    } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "/clear.png"
    } else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "/rain.png"
    } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "/drizzle.png"
    } else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "/mist.png"
    }

    if (data.weather[0].main === "Clouds") {
        document.querySelector('body').style.backgroundImage = 'url(public/nature.png)';
    } else if (data.weather[0].main === "Clear") {
        document.querySelector('body').style.backgroundImage = 'url(public/Anime_Girl.png)';
    } else if (data.weather[0].main === "Rain") {
        document.querySelector('body').style.backgroundImage = 'url(public/dreamy.png)';
    } else if (data.weather[0].main === "Drizzle") {
        document.querySelector('body').style.backgroundImage = 'url(public/Screenshot (462).png)';
    } else if (data.weather[0].main === "Mist") {
        document.querySelector('body').style.backgroundImage = 'url(public/Screenshot (451).png)';
    }
    
    document.querySelector(".weather").style.display = "flex";
    document.querySelector(".error").style.display = "none"


}



btn.addEventListener('click', (e) => {
    checkWeather(Searchbox.value);

    // setTimeout(function () {
    //     Searchbox.value = " ";
    // }, 4000);

})

// let Searchbox = " ";