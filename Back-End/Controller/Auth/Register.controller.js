// path (http://localhost:8080/auth/register)

require('dotenv').config()
const { validationResult } = require('express-validator');
const {authModel} = require("../../Models/Auth.model");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const {sendMailer} = require("../../asset/VerifyMail/VerifyMail");
const crypto = require("crypto");
const {tokenModel} = require("../../Models/Token.model");
const {EmailTemplate} = require("../../asset/EmailTemplate/EmailTemplate")

const registerController = async (req, res) =>{
  try {
   // If any error exists then throw Error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ msg : errors.array()[0].msg });
    }

    let {email, password, fname, lname, img, isSeller, isAdmin} = req.body;

    let user = await authModel.findOne({email});
    // if user already exists throw error
    if(user){
      return res.status(400).send({msg : "This email already exists please login"})
    }

   // Make password hash
   let hashPassword = await bcrypt.hash(password, saltRounds);

   // create user
   let auth = await authModel.create({email, password : hashPassword, fname, lname, img, isSeller, isAdmin});
   
   // create token to verify
   let token = await tokenModel.create({
    authId : auth._id,
    token : crypto.randomBytes(32).toString('hex')
   });

   let url = `${process.env.BASE_URL}/auth/${token.authId}/verify/${token.token}`
   let html = EmailTemplate(url);
   sendMailer(email, url, html)

    res.send({msg : "An email send to your account please verify!"})

  } catch (error) {
    return res.status(500).send({msg : "Somthing Went Wrong in Register"})
  }
}

module.exports = {registerController}