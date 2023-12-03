const apiKey = "b35ac93eaf2d4ff3d52068471bf7b32c";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&units=metric`;

const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

let search = document.getElementById("search-button");

let inputValue = document.getElementById("inputvalue");

async function checkWeather(cityName) {
  const response = await fetch(apiUrl + `&q=${cityName}&appid=${apiKey}`);
  var data = await response.json();

  if (data.message === "city not found") {
    alert("Enter a valid city.");
  } else {
    console.log(data);
    city.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + "°C";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + " kmph";
  }
}

function gettingdetails() {
  let cityName = inputValue.value;
  if (cityName === "") {
    alert("Please enter a city name");
  } else {
    checkWeather(cityName);
  }
}
search.addEventListener("click", function () {
  gettingdetails();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    gettingdetails();
  }
});
