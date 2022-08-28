const mongoose = require('mongoose');
const {Schema} = mongoose;
const MainModel = new Schema({
    data: [Object],
});

const refine = mongoose.model('MainData', MainModel);

module.exports = refine;