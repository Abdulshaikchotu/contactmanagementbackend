const express = require("express");
const app = express();
const bodyparser = require("body-parser");

const contactroute = require("./routes/contactroute");
const mongoose = require("mongoose");

app.use(bodyparser.json());
app.use(express.json());
app.use(contactroute);
mongoose
  .connect("mongodb://0.0.0.0:27017/contactmanagementsystem")
  .then(() => console.log("database conncected"));
app.listen(5000, () => {
  console.log("server up at 5000");
});
