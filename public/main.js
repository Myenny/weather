class WeatherList {
  constructor (parentSelector) {
    console.log(parentSelector)
    this.parent = document.querySelector(parentSelector)
    console.log(this.parent)
  }

  addWeather (message) {
    const msg = document.createElement('li')
    msg.textContent = message
    msg.classList.add('weather-message')
    this.parent.appendChild(msg)
  }
}

const addWeatherToPage = weather => {
  const weatherList = new WeatherList('.weather')
  weatherList.addWeather(`Currently: ${weather.main.temp} F`)
  weatherList.addWeather(`High: ${weather.main.temp_max}`)
  weatherList.addWeather(`Low: ${weather.main.temp_min}`)
  weatherList.addWeather(`${weather.main.humidity}% Humidity`)
  weatherList.addWeather(`City: ${weather.name}`)

  const forecastList = new WeatherList('.forecast')
  forecastList.addWeather('Tommorow it will be sunny')
  forecastList.addWeather('Friday it will rain')

  // append that LI to the people UL
}

// create a search bar with a clickable button
// wait for the user to click the button
// when they click the button, then make an api request for the weather
// from the name of the city get the api for the show the objects
// Find the ul named "weather"
// Get the weather from the weather object
// Create an LI, assign the weather as the text, add it to the ul
// Get the wind from the weather object
// Create an LI, assign the wind as the text, add it to the ul

const main = () => {
  // Use weather API to fetch the weather = d8befb1c04b3a2ab44f6ccc7bb0196f7

  let button = document.querySelector('.search-button')
  let searchInput = document.querySelector('.search')

  button.addEventListener('click', event => {
    let searchInputValue = searchInput.value
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInputValue}&units=imperial&appid=d8befb1c04b3a2ab44f6ccc7bb0196f7`
    fetch(url)
      // IOU for the response
      .then(response => {
        return response.json()
      })
      // IOU for the JSON data
      .then(weatherAsJSON => {
        console.log(weatherAsJSON)
        addWeatherToPage(weatherAsJSON)
      })
    // this is the search bar
  })
}

document.addEventListener('DOMContentLoaded', main)
