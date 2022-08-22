const mongoose = require('mongoose');
const {Schema} = mongoose;

const DBModelSchema = new Schema({
    timestamp: {
        type: Date,
        required: Date.now
    },
    simnumber: {
        type: String,
        required: true
    },
    rd : [Array]
});

const dbmodel = mongoose.model('dbmodel',DBModelSchema);

dbmodel.createIndexes();

module.exports = dbmodel;