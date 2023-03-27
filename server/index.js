const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/get", (req, res) => {
  res.json("{'msg': 'NONONOONNO'}");
});

app.listen("3001", () => {});
