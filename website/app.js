/* <===<{ Client App File }>===> */

//get the function that retreive the weather
import { getWeatherFromZip } from "./src/Weather.js";
// import { port } from "../server";

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

let tempreture = 0;
let date = 0;
let feel = 0;

const getWeather = async () => {
  console.log(zipText);
  let zipcode = zipText.value || "10001";
  const weatherData = await weather(zipcode);
  const logg = await updateContent(weatherData);
};

const updateContent = (weatherData) => {
  let temp = weatherData.main.temp;
  //   let temp = weatherData.main.temp;
  tempText.innerHTML = temp;
  dateText.innerHTML = currentDate;
  contentText.innerHTML = feelingsText.value;

  return temp;
};

getWeatherBtn.addEventListener("click", getWeather);

// TODO
// update their necessary values to reflect the dynamic values for:

// Temperature
// Date
// User input
