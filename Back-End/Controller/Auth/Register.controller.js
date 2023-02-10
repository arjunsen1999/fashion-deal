// path (http://localhost:8080/auth/register)

const { validationResult } = require('express-validator');
const {authModel} = require("../../Models/Auth.model");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const registerController = async (req, res) =>{
  try {
   // If any error exists then throw Error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ msg : errors.array()[0].msg });
    }

    let {email, password, fname, lname, img} = req.body;

    let user = await authModel.findOne({email});
    // if user already exists throw error
    if(user){
      return res.status(400).send({msg : "This email already exists please login"})
    }

   // Make password hash
   let hashPassword = await bcrypt.hash(password, saltRounds);

   // create user
   await authModel.create({email, password : hashPassword, fname, lname, img});
   res.send({msg : "Register Successfully!"});

  } catch (error) {
    res.status(400).send({msg : "Somthing Went Wrong in Register"})
  }
}

module.exports = {registerController}