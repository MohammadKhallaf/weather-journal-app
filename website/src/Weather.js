/* <===<{ Client Weather API fetching file }>===> */

// setting the con

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const WEATHER_API_KEY = "ffe4950e60a08e7fb31d118c565ed86c";
const localserver = `http://localhost:3000`;

// Integrating OpenWeatherMap API
export async function getWeatherFromZip(zipCode, date, userFeel) {
  const response = await fetch(
    `${BASE_URL}?zip=${zipCode}&appid=${WEATHER_API_KEY}&units=metric`,
    {
      method: "GET",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch weather. Please try again!");
  }
  //returned data from the external API
  const data = await response.json();
  const result = await fetch(localserver + "/add-data/", {
    method: "POST",
    body: JSON.stringify({
      temp: data.main.temp,
      date: date,
      feel: userFeel,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return data;
}
