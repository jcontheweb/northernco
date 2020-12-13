const express = require("express");
const app = express();
const cors = require("cors");
var path = require("path");
var bodyParser = require("body-parser");

app.use(cors());

app.post("/api/form", (req, res) => {
  res.setTimeout(3000, () => {
    res.sendStatus(200);
  });
});

const port = 3002;

app.listen(process.env.PORT || port);
