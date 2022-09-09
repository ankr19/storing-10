const mongoose = require('mongoose');
var AutoIncrement = require('mongoose-sequence')(mongoose);
const {Schema} = mongoose;
const MainModel = new Schema({
    ID: Number,
    data: [Object],
});

MainModel.plugin(AutoIncrement, {inc_field: 'ID'})
const refine = mongoose.model('MainData', MainModel);

module.exports = refine;