const mongoose = require("mongoose");

const contactschema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  phone: { type: String, unique: true, required: true },
});

const contactmodel = mongoose.model("contactlist", contactschema);

module.exports = contactmodel;
