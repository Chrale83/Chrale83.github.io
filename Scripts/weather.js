let temperature = document.getElementById("temperature");
let windSpeed = document.getElementById("windSpeed");
let weatherCode = document.getElementById("weatherCode");

let getWeatherButton = document.getElementById("getWeather");

getWeatherButton.addEventListener("click", getData);

async function getData() {
  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=68.18&longitude=18.4&current=temperature_2m,weather_code,wind_speed_10m&models=metno_seamless";

  fetch(url) // Korrekt användning av variabeln
    .then((response) => {
      if (!response.ok) {
        throw new Error("Nätverksfel: " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Temperatur:", data.current.temperature_2m + "°C");
      console.log("Vindhastighet:", data.current.wind_speed_10m + " km/h");
      console.log("Väderkod:", data.current.weather_code);
      console.log("Tidszon:", data.timezone);

      // Uppdatera HTML-elementens textinnehåll
      temperature.textContent = data.current.temperature_2m + "°C";
      windSpeed.textContent = data.current.wind_speed_10m + " km/h";
      weatherCode.textContent = data.current.weather_code;
    })
    .catch((error) => console.error("Fel vid hämtning:", error));
}
