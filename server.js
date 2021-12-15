/* <===<{ Server Setting file }>===> */

/* <=== get the needed dependencies ===> */

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

/* --- weather routes --- */
const weatherRoutes = require("./routes/weather");

/* <=== setting the server ===> */
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(weatherRoutes);
app.use(express.static("website"));

/* <=== starting the server ===> */
app.listen(port, () => {
  console.log(`App works well at http://localhost:${port}`);
});

//done for now
