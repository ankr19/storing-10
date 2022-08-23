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
  const { simnumber,rd } = req.body;
  // storing the data
  try {
    // if there is data which is present then we have to just update the value
    // if there the data is not present then new can simply insert the new one
      const model = new dbmodel({
        timestamp: Date.now(),
        simnumber,
        rd:[rd]
      });
      const savemodel = await model.save();
      res.json(savemodel);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// now getting all the store data from server
router.post("/getDBdata",async(req, res)=>{
  const dbdata = await dbmodel.find({simnumber})
  
})

module.exports = router;
