/* <===<{ Server Weather Router Setting File }>===> */

const express = require("express");
const router = express.Router();

const projectData = {
  data: [],
};

router.post("/add-data", (req, res, next) => {
  projectData.data.push({
    temp: req.body.temp,
    date: req.body.date,
    usrfeel: req.body.feel,
  });
  res.json({ message: "POST request done" });
});

router.get("/data", (req, res, next) => {
  console.log(data);

  res.json({
    tempreture: projectData.data.temp,
    date: projectData.data.date,
    userfeel: projectData.data.usrfeel,
  });
});

module.exports = router;
