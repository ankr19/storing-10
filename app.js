//importing the express
var express = require("express");
const connectToMongo = require('./database');
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;
connectToMongo();
app.use(cors());

app.use(express.json());

// given the api storing location
// endpoint is http://localhost:5000/module/dbdata
app.use("/module",require('./routes/rddata'))

// running the port on the server
app.listen(port, () => {
  console.log(`app runnning on port http://localhost:${port}`);
});
