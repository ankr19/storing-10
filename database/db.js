var mongoose = require("mongoose");

const mongodbURL = "mongodb://localhost:27017/rdData?readPreference=primary&appname=MongoDB%20Compass&ssl=false";


const connectToMongo = async ()=>{
    mongoose.connect(mongodbURL, ()=> {
        console.log("connected to mongo Successfully");
    })
}


module.exports = connectToMongo;