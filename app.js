//importing the express
var express = require("express");
const connect = require();
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

// given the api storing location
// app.use("/storing",)

// running the port on the server
app.listen(port, () => {
  console.log(`app runnning on port ${port}`);
});
