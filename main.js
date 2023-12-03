const form = document.getElementById("form");
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
    const feel_like = data.main.feels_like;
    const temp = data.main.temp;
    const countryName = data.name;
    console.log(countryName);
    console.log("temp " + temp);
    console.log("feel like " + feel_like);
}
