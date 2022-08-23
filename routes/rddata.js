const express = require("express");
const { validationResult } = require("express-validator");
const dbmodel = require("../models/dbmodel");

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
  const { data } = req.body;
  // storing the data
  try {
    // if there is data which is present then we have to just update the value
    const present = await dbmodel.findOne({ data }).exec();
    if (present) {
      const value = await dbmodel.findOneAndUpdate(
        { $push: { data:data } }
      );
      res.status(200).send(value);
    }
    // if there the data is not present then new can simply insert the new one
    else {
      const model = new dbmodel({
        data
      });
      const savemodel = await model.save();
      res.json(savemodel);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
