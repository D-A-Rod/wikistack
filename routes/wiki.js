const express = require("express");
const router = express.Router();
//router.use('/user', require('./user'))

router.get("/", (req, res, next) => {
  res.send("got to GET /wiki/");
});

router.post("/", (req, res, next) => {
  res.send("got to POST /wiki/");
});

router.get("/add", (req, res, next) => {
  res.send("got to GET /wiki/add");
});
