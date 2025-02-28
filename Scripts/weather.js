document.addEventListener("DOMContentLoaded", function () {
  getData();
});

async function getData() {
  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=68.18&longitude=18.4&current=temperature_2m,weather_code,wind_speed_10m&models=metno_seamless";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Nätverksfel: " + response.status);
    }
    const data = await response.json();

    console.log("Temperatur:", data.current.temperature_2m + "°C");
    console.log("Vindhastighet:", data.current.wind_speed_10m + " km/h");
    console.log("Väderkod:", data.current.weather_code);
    console.log("Tidszon:", data.timezone);

    let temperature = data.current.temperature_2m;
    let windSpeed = data.current.wind_speed_10m;
    let weatherCode = data.current.weather_code;

    SetWeatherFromCode(weatherCode, temperature, windSpeed);
  } catch (error) {
    console.error("Fel vid hämtning:", error);
  }
}

function SetWeatherFromCode(code, temp, wind) {
  let weatherDescription;

  switch (code) {
    case 1:
    case 2:
      weatherDescription = "Det är perfekt väder";
      break;
    case 3:
      weatherDescription = "Det regnar";
      break;
    case 4:
      weatherDescription = "Det är stormigt";
      break;
    case 71:
    case 73:
    case 75:
      weatherDescription = "Det snöööar";
    default:
      weatherDescription = "Vädret är ??";
  }

  document.getElementById("weatherInfo").innerHTML = `
  ${weatherDescription}
  Temperatur: ${temp}°C
  Vindhastighet: ${wind} km/h
`;

  // document.getElementById(
  //   "weatherInfo"
  // ).textContent = `${weatherDescription}, Temperatur: ${temp}°C, Vindhastighet: ${wind} km/h`;
}

// WMO Weather interpretation codes (WW)
// Code	Description
// 0	Clear sky
// 1, 2, 3	Mainly clear, partly cloudy, and overcast
// 45, 48	Fog and depositing rime fog
// 51, 53, 55	Drizzle: Light, moderate, and dense intensity
// 56, 57	Freezing Drizzle: Light and dense intensity
// 61, 63, 65	Rain: Slight, moderate and heavy intensity
// 66, 67	Freezing Rain: Light and heavy intensity
// 71, 73, 75	Snow fall: Slight, moderate, and heavy intensity
// 77	Snow grains
// 80, 81, 82	Rain showers: Slight, moderate, and violent
// 85, 86	Snow showers slight and heavy
// 95 *	Thunderstorm: Slight or moderate
// 96, 99 *	Thunderstorm with slight and heavy hail
