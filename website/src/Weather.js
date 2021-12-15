/* <===<{ Client Weather API fetching file }>===> */

// setting the con

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const WEATHER_API_KEY = "ffe4950e60a08e7fb31d118c565ed86c";

export async function getWeatherFromZip(zipCode) {
  const response = await fetch(
    `${BASE_URL}?zip=${zipCode}&appid=${WEATHER_API_KEY}&units=metric`,
    {
      method: "GET",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch weather. Please try again!");
  }
  const data = await response.json();
  if (data.error_message) {
    throw new Error(data.error_message);
  }
  //   console.log("retrieving done");
  console.dir(data);
  return data;
}
