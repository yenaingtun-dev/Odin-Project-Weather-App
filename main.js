const form = document.getElementById("form");
const temperature = document.querySelector(".temp");
const city = document.querySelector(".city");
const country_name = document.querySelector(".country_name");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const country = document.getElementById("country").value;
    getWeather(country);
});

async function getWeather(country) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=6474b5c914961f6832d52f0255e59890&units=metric`
    );
    const data = await response.json();
    const temp = data.main.temp;
    const countryName = data.sys.country;
    const cityName = data.name;
    temperature.innerHTML = temp;
    temperature.append("°C");
    city.textContent = cityName;
    city.append(",");
    country_name.innerHTML = countryName;
}
