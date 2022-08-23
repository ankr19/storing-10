const mongoose = require('mongoose');
const {Schema} = mongoose;
const dataSchema = new Schema({
    timestamp:{
        type:Date,
        required:true
    },
    simnumber:{
        type: String,
        required:true
    },
    rd:Array
});

const dbmodel = mongoose.model('dbmodel',dataSchema);

dbmodel.createIndexes();

module.exports = dbmodel;