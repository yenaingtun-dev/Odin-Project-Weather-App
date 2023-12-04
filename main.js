const form = document.getElementById("form");
const temperature = document.querySelector(".temp");
const city = document.querySelector(".city");
const country_name = document.querySelector(".country_name");
const icon = document.querySelector(".element");
const cloudy_lightning = `
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60.7 48.7" style="enable-background:new 0 0 60.7 48.7;" xml:space="preserve">
            <g id="Cloud_4"><g id="White_cloud_4"><path id="XMLID_69_" class="white" d="M47.2,40H7.9C3.5,40,0,36.5,0,32.1l0,0c0-4.3,3.5-7.9,7.9-7.9h39.4c4.3,0,7.9,3.5,7.9,7.9v0 C55.1,36.5,51.6,40,47.2,40z"/>
<circle id="XMLID_68_" class="white" cx="17.4" cy="22.8" r="9.3"/><circle id="XMLID_67_" class="white" cx="34.5" cy="21.1" r="15.6"/>
                <animateTransform attributeName="transform"
                    attributeType="XML"
                    dur="6s"
                    keyTimes="0;0.5;1"
                    repeatCount="indefinite"
                    type="translate"
                    values="0;5;0"
                    calcMode="linear">
                </animateTransform>
                </g>
                <g id="Gray_cloud_4">
                    <path id="XMLID_65_" class="gray" d="M54.7,22.3H33.4c-3.3,0-6-2.7-6-6v0c0-3.3,2.7-6,6-6h21.3c3.3,0,6,2.7,6,6v0 C60.7,19.6,58,22.3,54.7,22.3z"/>
                    <circle id="XMLID_64_" class="gray" cx="45.7" cy="10.7" r="10.7"/>
                    <animateTransform attributeName="transform"
                    attributeType="XML"
                    dur="6s"
                    keyTimes="0;0.5;1"
                    repeatCount="indefinite"
                    type="translate"
                    values="0;-3;0"
                    calcMode="linear">
                </animateTransform>
                </g>
                <g id="Lightning_4">
                    <path id="XMLID_79_" class="yellow" d="M43.6,22.7c-0.2,0.6-0.4,1.3-0.6,1.9c-0.2,0.6-0.4,1.2-0.7,1.8c-0.4,1.2-0.9,2.4-1.5,3.5
                    c-1,2.3-2.2,4.6-3.4,6.8l-1.7-2.9c3.2-0.1,6.3-0.1,9.5,0l3,0.1l-1.3,2.5c-1.1,2.1-2.2,4.2-3.5,6.2c-0.6,1-1.3,2-2,3
                    c-0.7,1-1.4,2-2.2,2.9c0.2-1.2,0.5-2.4,0.8-3.5c0.3-1.2,0.6-2.3,1-3.4c0.7-2.3,1.5-4.5,2.4-6.7l1.7,2.7c-3.2,0.1-6.3,0.2-9.5,0
                    l-3.4-0.1l1.8-2.8c1.4-2.1,2.8-4.2,4.3-6.2c0.8-1,1.6-2,2.4-3c0.4-0.5,0.8-1,1.3-1.5C42.7,23.7,43.1,23.2,43.6,22.7z"/>
                    <animate attributeType="CSS"
                    attributeName="opacity"
                    attributeType="XML"
                    dur="1.5s"
                    keyTimes="0;0.5;1"
                    repeatCount="indefinite"
                    values="1;0;1"
                    calcMode="linear"/>
                </g>
                </g>
            </svg>`;
const cloudy = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60.7 40" style="enable-background:new 0 0 60.7 40;" xml:space="preserve">
            <g id="Cloud_1">
                <g id="White_cloud_1">
                    <path id="XMLID_2_" class="white" d="M47.2,40H7.9C3.5,40,0,36.5,0,32.1l0,0c0-4.3,3.5-7.9,7.9-7.9h39.4c4.3,0,7.9,3.5,7.9,7.9v0 C55.1,36.5,51.6,40,47.2,40z"/>
                    <circle id="XMLID_3_" class="white" cx="17.4" cy="22.8" r="9.3"/>
                    <circle id="XMLID_4_" class="white" cx="34.5" cy="21.1" r="15.6"/>
                    <animateTransform attributeName="transform"
                    attributeType="XML"
                    dur="6s"
                    keyTimes="0;0.5;1"
                    repeatCount="indefinite"
                    type="translate"
                    values="0;5;0"
                    calcMode="linear">
                    </animateTransform>
                </g>
                <g id="Gray_cloud_1">
                    <path id="XMLID_6_" class="gray" d="M54.7,22.3H33.4c-3.3,0-6-2.7-6-6v0c0-3.3,2.7-6,6-6h21.3c3.3,0,6,2.7,6,6v0 C60.7,19.6,58,22.3,54.7,22.3z"/>
                    <circle id="XMLID_7_" class="gray" cx="45.7" cy="10.7" r="10.7"/>
                    <animateTransform attributeName="transform"
                    attributeType="XML"
                    dur="6s"
                    keyTimes="0;0.5;1"
                    repeatCount="indefinite"
                    type="translate"
                    values="0;-3;0"
                    calcMode="linear">
                    </animateTransform>
                </g>
                </g>
            </svg>
`;
const rainny = `
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 55.1 60" style="enable-background:new 0 0 55.1 49.5;" xml:space="preserve">
                <g id="Cloud_2">
                    <g id="Rain_2">
                    <path id="rain_2_left" class="white" d="M20.7,46.4c0,1.7-1.4,3.1-3.1,3.1s-3.1-1.4-3.1-3.1c0-1.7,3.1-7.8,3.1-7.8 S20.7,44.7,20.7,46.4z"></path>
                        <path id="rain_2_mid" class="white" d="M31.4,46.4c0,1.7-1.4,3.1-3.1,3.1c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,3.1-7.8,3.1-7.8 S31.4,44.7,31.4,46.4z"></path>
                    <path id="rain_2_right" class="white" d="M41.3,46.4c0,1.7-1.4,3.1-3.1,3.1c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,3.1-7.8,3.1-7.8 S41.3,44.7,41.3,46.4z"></path>
                    <animateTransform attributeName="transform"
                    attributeType="XML"
                    dur="1s"
                    keyTimes="0;1"
                    repeatCount="indefinite"
                    type="translate"
                    values="0 0;0 10"
                    calcMode="linear">
                    </animateTransform>
                    <animate attributeType="CSS"
                    attributeName="opacity"
                    attributeType="XML"
                    dur="1s"
                    keyTimes="0;1"
                    repeatCount="indefinite"
                    values="1;0"
                    calcMode="linear"/>
                    </g>
                    <g id="White_cloud_2">
                        <path id="XMLID_14_" class="white" d="M47.2,34.5H7.9c-4.3,0-7.9-3.5-7.9-7.9l0,0c0-4.3,3.5-7.9,7.9-7.9h39.4c4.3,0,7.9,3.5,7.9,7.9 v0C55.1,30.9,51.6,34.5,47.2,34.5z"/>
                        <circle id="XMLID_13_" class="white" cx="17.4" cy="17.3" r="9.3"/>
                        <circle id="XMLID_10_" class="white" cx="34.5" cy="15.6" r="15.6"/>
                    </g>
                </g>
            </svg>
`;
const sunny = `
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 44.9 44.9" style="enable-background:new 0 0 44.9 44.9;" xml:space="preserve" height="40px" width="40px">
                <g id="Sun">
                    <circle id="XMLID_61_" class="yellow" cx="22.4" cy="22.6" r="11"/>
                <g>
                    <path id="XMLID_60_" class="yellow" d="M22.6,8.1h-0.3c-0.3,0-0.6-0.3-0.6-0.6v-7c0-0.3,0.3-0.6,0.6-0.6l0.3,0c0.3,0,0.6,0.3,0.6,0.6 v7C23.2,7.8,22.9,8.1,22.6,8.1z"/>
                    <path id="XMLID_59_" class="yellow" d="M22.6,36.8h-0.3c-0.3,0-0.6,0.3-0.6,0.6v7c0,0.3,0.3,0.6,0.6,0.6h0.3c0.3,0,0.6-0.3,0.6-0.6v-7 C23.2,37,22.9,36.8,22.6,36.8z"/>
                    <path id="XMLID_58_" class="yellow" d="M8.1,22.3v0.3c0,0.3-0.3,0.6-0.6,0.6h-7c-0.3,0-0.6-0.3-0.6-0.6l0-0.3c0-0.3,0.3-0.6,0.6-0.6h7 C7.8,21.7,8.1,21.9,8.1,22.3z"/>
                    <path id="XMLID_57_" class="yellow" d="M36.8,22.3v0.3c0,0.3,0.3,0.6,0.6,0.6h7c0.3,0,0.6-0.3,0.6-0.6v-0.3c0-0.3-0.3-0.6-0.6-0.6h-7 C37,21.7,36.8,21.9,36.8,22.3z"/>
                    <path id="XMLID_56_" class="yellow" d="M11.4,31.6l0.2,0.3c0.2,0.2,0.2,0.6-0.1,0.8l-5.3,4.5c-0.2,0.2-0.6,0.2-0.8-0.1l-0.2-0.3 c-0.2-0.2-0.2-0.6,0.1-0.8l5.3-4.5C10.9,31.4,11.2,31.4,11.4,31.6z"/>
                    <path id="XMLID_55_" class="yellow" d="M33.2,13l0.2,0.3c0.2,0.2,0.6,0.3,0.8,0.1l5.3-4.5c0.2-0.2,0.3-0.6,0.1-0.8l-0.2-0.3 c-0.2-0.2-0.6-0.3-0.8-0.1l-5.3,4.5C33,12.4,33,12.7,33.2,13z"/>
                    <path id="XMLID_54_" class="yellow" d="M11.4,13.2l0.2-0.3c0.2-0.2,0.2-0.6-0.1-0.8L6.3,7.6C6.1,7.4,5.7,7.5,5.5,7.7L5.3,7.9 C5.1,8.2,5.1,8.5,5.4,8.7l5.3,4.5C10.9,13.5,11.2,13.5,11.4,13.2z"/>
                    <path id="XMLID_53_" class="yellow" d="M33.2,31.9l0.2-0.3c0.2-0.2,0.6-0.3,0.8-0.1l5.3,4.5c0.2,0.2,0.3,0.6,0.1,0.8l-0.2,0.3 c-0.2,0.2-0.6,0.3-0.8,0.1l-5.3-4.5C33,32.5,33,32.1,33.2,31.9z"/>
                    <animate attributeType="CSS"
                    attributeName="opacity"
                    attributeType="XML"
                    dur="0.5s"
                    keyTimes="0;0.5;1"
                    repeatCount="indefinite"
                    values="1;0.6;1"
                    calcMode="linear"/>
                </g>
                </g>
            </svg>
`;
const night = `
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 30.8 42.5" style="enable-background:new 0 0 30.8 42.5;" xml:space="preserve" height="40px" width="40px">
                <path id="Moon" class="yellow" d="M15.3,21.4C15,12.1,21.1,4.2,29.7,1.7c-2.8-1.2-5.8-1.8-9.1-1.7C8.9,0.4-0.3,10.1,0,21.9 c0.3,11.7,10.1,20.9,21.9,20.6c3.2-0.1,6.3-0.9,8.9-2.3C22.2,38.3,15.6,30.7,15.3,21.4z"/>
            </svg>
`;
const snow = `
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 55.1 52.5" style="enable-background:new 0 0 55.1 52.5;" xml:space="preserve">
                <g id="Cloud_7">
                <g id="White_cloud_7">
                    <path id="XMLID_8_" class="white" d="M47.2,34.5H7.9c-4.3,0-7.9-3.5-7.9-7.9l0,0c0-4.3,3.5-7.9,7.9-7.9h39.4c4.3,0,7.9,3.5,7.9,7.9 v0C55.1,30.9,51.6,34.5,47.2,34.5z"/>
                    <circle id="XMLID_5_" class="white" cx="17.4" cy="17.3" r="9.3"/>
                    <circle id="XMLID_1_" class="white" cx="34.5" cy="15.6" r="15.6"/>
                </g>
                <circle class="white" cx="37" cy="43.5" r="3">
                    <animateTransform attributeName="transform"
                    attributeType="XML"
                    dur="1.5s"
                    keyTimes="0;0.33;0.66;1"
                    repeatCount="indefinite"
                    type="translate"
                    values="1 -2;3 2; 1 4; 2 6"
                    calcMode="linear">
                    </animateTransform>
                </circle>
                <circle class="white" cx="27" cy="43.5" r="3">
                    <animateTransform attributeName="transform"
                    attributeType="XML"
                    dur="1.5s"
                    keyTimes="0;0.33;0.66;1"
                    repeatCount="indefinite"
                    type="translate"
                    values="1 -2;3 2; 1 4; 2 6"
                    calcMode="linear">
                    </animateTransform>
                </circle>
                <circle class="white" cx="17" cy="43.5" r="3">
                    <animateTransform attributeName="transform"
                    attributeType="XML"
                    dur="1.5s"
                    keyTimes="0;0.33;0.66;1"
                    repeatCount="indefinite"
                    type="translate"
                    values="1 -2;3 2; 1 4; 2 6"
                    calcMode="linear">
                    </animateTransform>
                </circle>
                </g>
            </svg>
`;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const country = document.getElementById("country").value;
    const container = document.querySelector(".container");
    if (country !== null && country !== "") {
        container.classList.remove("hidden");
        getWeather(country);
    } else {
        console.log("u need to add city");
    }
});

async function getWeather(country) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=6474b5c914961f6832d52f0255e59890&units=metric`
    );
    const data = await response.json();
    const temp = data.main.temp;
    const countryName = data.sys.country;
    const cityName = data.name;
    const weatherIcon = data.weather[0].main;
    temperature.innerHTML = Math.round(temp);
    temperature.append("°C");
    city.textContent = cityName;
    city.append(",");
    country_name.innerHTML = countryName;
    if (
        weatherIcon === "Rain" ||
        weatherIcon === "Thunderstorm" ||
        weatherIcon === " Shower Rain "
    ) {
        icon.innerHTML = rainny;
    } else if (
        weatherIcon === "Snow" ||
        weatherIcon === "Mist" ||
        weatherIcon === "Haze" ||
        weatherIcon === "Smoke" ||
        weatherIcon === "Fog"
    ) {
        icon.innerHTML = snow;
    } else if (weatherIcon === "Few Clouds " || weatherIcon === "Clouds") {
        icon.innerHTML = cloudy;
    } else if (weatherIcon === "Clear") {
        icon.innerHTML = sunny;
    } else {
        icon.innerHTML = night;
    }
    console.log(weatherIcon);
    document.getElementById("country").value = "";
}
