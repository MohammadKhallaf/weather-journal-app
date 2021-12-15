/* <===<{ Client App File }>===> */

//get the function that retreive the weather
import { getWeatherFromZip } from "./src/Weather.js";

/* <--- get elements ---> */
const getWeatherBtn = document.getElementById("generate");
const zipText = document.getElementById("zip");
const feelingsText = document.getElementById("feelings");
const dateText = document.getElementById("date");
const tempText = document.getElementById("temp");
const contentText = document.getElementById("content");

let d = new Date();
let currentDate = d.toDateString();

const weather = getWeatherFromZip;
const localserver = `http://localhost:3000`;

const getWeather = async () => {
  let zipcode = zipText.value || "10001"; //putting a default value to retrieve
  let userFeeling = feelingsText.value;
  const weatherData = await weather(zipcode, currentDate, userFeeling);
  const data = await updateProjectData(weatherData);
};

const updateProjectData = (weatherData) => {
  fetch(localserver + "/data")
    .then((response) => response.json())
    .then((data) => {
      tempText.innerHTML = data.temp;
      dateText.innerHTML = data.date;
      contentText.innerHTML = data.usrfeel;
    });
};

getWeatherBtn.addEventListener("click", getWeather);
