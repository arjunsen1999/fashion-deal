const mongoose = require('mongoose');


const authSchema = mongoose.Schema({

}, {versionkey : false, timestamps : true});


const authModel = mongoose.model("Auth", authSchema);
module.exports = {authModel}