const mongoose = require('mongoose');
const {Schema} = mongoose;
const dataSchema = new Schema({
    timestamp:{
        type:Date,
        default:Date.now()
    },
    simnumber:{
        type: String,
    },
    rd:Array
});

const DBModelSchema = new Schema({
    data:[dataSchema]
});

const dbmodel = mongoose.model('dbmodel',DBModelSchema);

dbmodel.createIndexes();

module.exports = dbmodel;