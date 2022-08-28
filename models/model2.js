const mongoose = require('mongoose');

// creating the model
const {Schema} = mongoose;

const storeSchema = new Schema({
    Date: Array,
    Time:Array,
    vdc: Array,
    idc:Array,
    rpm:Array,
    idref:Array,
    tmot:Array,
    tesc:Array,
});

const model2 = mongoose.model('model2',storeSchema);

model2.createIndexes();

module.exports = model2;