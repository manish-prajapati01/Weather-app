const apiKey = "7d17a510029feb2f76b149b98bc3cdbd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox=document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data =await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML =data.main.humidity + "%";
  document.querySelector(".wind").innerHTML =data.wind.speed + "Km/h";
  document.querySelector(".condition").innerHTML = data.weather[0].main;

  if(data.weather[0].main == "Clouds") {
    weatherIcon.src="cloud.png";
  } else if(data.weather[0].main == "Clear") {
    weatherIcon.src="clear.png";
  } else if(data.weather[0].main == "Rain") {
    weatherIcon.src="rain.png";
  } else if(data.weather[0].main == "Snow") {
    weatherIcon.src="snow.png";
  } else if(data.weather[0].main == "Haze") {
    weatherIcon.src="haze.png";
  } 

  document.querySelector(".weather").style.display ="block";
}


searchBtn.addEventListener("click",()=>{
  checkWeather(searchBox.value);
})
searchBox.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    checkWeather(searchBox.value);
  }
});


