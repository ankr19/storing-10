const express = require("express");
const { validationResult } = require("express-validator");
const rearrange = require("../database/rearrange");
const dbmodel = require("../models/dbmodel");
const model2 = require("../models/model2");

const router = express.Router();

// route 1
// storing the db data through the POST
router.post("/dbdata", async (req, res) => {
  const error = validationResult(req);
  // if there is no bad request
  if (!error.isEmpty()) {
    return res.status(400).json({ errors: error });
  }

  // extracting the data from request
  const { simnumber, rd } = req.body;
  // storing the data
  try {
    // if there is data which is present then we have to just update the value
    // if there the data is not present then new can simply insert the new one
    const model = new dbmodel({
      timestamp: Date.now(),
      simnumber: simnumber,
      rd: [rd],
    });
    const savemodel = await model.save();
    res.json(savemodel);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// now getting all the store data from server
router.post("/getdbdata", async (req, res) => {
  const { simnumber } = req.body;
  try {
    let value = await dbmodel.find({ simnumber: simnumber });
    res.status(200).send(value);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("internal server error");
  }
});

// storing the data in row and columns of the all
router.post("/rdata", async (req, res) => {
  const { Date, Time, vdc, idc, rpm, idref, tmot, tesc } = req.body;
  try {
    const model = new model2({
      Date: Date,
      Time: Time,
      vdc: vdc,
      idc: idc,
      rpm: rpm,
      idref: idref,
      tmot: tmot,
      tesc: tesc,
    });
    const savem = await model.save();
    res.status(200).send(savem);
    rearrange();
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
