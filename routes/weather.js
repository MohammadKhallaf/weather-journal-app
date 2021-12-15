/* <===<{ Server Weather Router Setting File }>===> */

const express = require("express");
const router = express.Router();

let projectData = {};

router.post("/add-data", (req, res, next) => {
  projectData = {
    temp: req.body.temp,
    date: req.body.date,
    usrfeel: req.body.feel,
  };

  res.json({ message: "POST request done" });
});

router.get("/data", (req, res, next) => {
  res.json({
    temp: projectData.temp,
    date: projectData.date,
    usrfeel: projectData.usrfeel,
  });
});

module.exports = router;
