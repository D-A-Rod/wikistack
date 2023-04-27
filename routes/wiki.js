const express = require("express");
const router = express.Router();
router.use((req, res) => {
  console.log("A request has been made to /wiki");

});

router.get("/", (req, res) => {
  res.send("got to GET /wiki/");
});

router.post("/", (req, res) => {
  res.send("got to POST /wiki/");
});

router.get("/add", (req, res) => {
  res.send("got to GET /wiki/add");
});


module.exports = router