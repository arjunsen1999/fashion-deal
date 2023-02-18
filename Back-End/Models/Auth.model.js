const mongoose = require('mongoose');


const authSchema = mongoose.Schema({
 fname : {
    type : String,
    required : true
 },
 lname : {
    type : String,
    required : true
 },
 img : {
  type : String
 },
 email : {
    type : String,
    required : true,
    unique : true
 },
 password : {
    type : String,
    required : true
 },
 isSeller : {
    type : Boolean,
    default : false
 },
 isAdmin : {
    type : Boolean,
    default : false
 },
 isActive : {
    type : Boolean,
    default : false
 }
}, {versionKey : false, timestamps : true});


const authModel = mongoose.model("auth", authSchema);
module.exports = {authModel}