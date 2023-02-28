const express = require("express");

const router = express.Router();

const contactmodel = require("../models/contact");

//post method
router.post("/post/v1/contacts", async (req, res) => {
  try {
    let Contact = await contactmodel.create(req.body);
    res.json({
      status: "success",
      data: Contact,
    });
  } catch (e) {
    res.json({
      status: "fail",
      msg: e.message,
    });
  }
});

//get all data
router.get("/get/v1/contacts", async (req, res) => {
  try {
    let Contact = await contactmodel.find();
    res.json({
      status: "success",
      data: Contact,
    });
  } catch (e) {
    res.json({
      status: "fail",
      msg: e.message,
    });
  }
});

//get specific contact
router.get("/get/v1/contacts/:id", async (req, res) => {
  try {
    let Contact = await contactmodel.find({ _id: req.params.id });
    res.json({
      status: "success",
      data: Contact,
    });
  } catch (e) {
    res.json({
      status: "there is no cotact with that id",
      msg: e.message,
    });
  }
});

//delete with id
router.delete("/delete/v1/contacts/:id", async (req, res) => {
  try {
    let Contact = await contactmodel.deleteOne({ _id: req.params.id });
    res.json({
      status: "successfully deleted",
      data: Contact,
    });
  } catch (e) {
    res.json({
      status: "there is no cotact with that id",
      msg: e.message,
    });
  }
});

//update with specific id
router.put("/put/v1/contacts/:id", async (req, res) => {
  try {
    let Contact = await contactmodel.updateOne(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.json({
      status: "successfully updated",
      data: Contact,
    });
  } catch (e) {
    res.json({
      status: "there is no cotact with that id",
      msg: e.message,
    });
  }
});

//update with partial data
router.put("/patch/v1/contacts/:id", async (req, res) => {
  try {
    let Contact = await contactmodel.updateOne(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.json({
      status: "successfully updated",
      data: Contact,
    });
  } catch (e) {
    res.json({
      status: "there is no cotact with that id",
      msg: e.message,
    });
  }
});

module.exports = router;
