// # EX 2 Weather API

// Let’s call the Current Weather API —> https://openweathermap.org/current

// But first we will need to sign up in order to be able to use the API
// —> https://home.openweathermap.org/users/sign_up

// Find your API key here —> https://home.openweathermap.org/api_keys

// - Try to call the api with different cities like London and Berlin.

// - Display on the html page the weather forecast with name of the city, temperature and weather (sunny, rainy etc..)




function Movies() {
  var city = document.querySelector("input").value;
  document.querySelectorAll("div").forEach(element => {
    element.remove()
    })
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a649f48c0d27ec05c0d86837b49029b1&units=metric`)
    .then(response => response.json())  
    .then(data =>{
      console.log(data)
      var div = document.createElement("div")
      var cityName = document.createElement("h1")
      cityName.innerHTML = data.name
      div.appendChild(cityName) 
      var temp = document.createElement("h2")
      temp.innerHTML = data.main.temp
      div.appendChild(temp)
      var weather = document.createElement("h3")
      weather.innerHTML = data.weather[0].description
      div.appendChild(weather)
      document.body.appendChild(div)
    })
  
}
document.querySelector("input").addEventListener("keyup", Movies)