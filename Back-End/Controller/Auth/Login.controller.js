// path (http://localhost:8080/auth/login)

require('dotenv').config()
const { validationResult } = require('express-validator');
const {authModel} = require("../../Models/Auth.model");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');


const loginController = async (req, res) =>{
 try {
    // If any error exists then throw Error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ msg : errors.array()[0].msg });
    }

    let {email, password} = req.body;

    // If user not exists then throw error
    let isAuth = await authModel.findOne({email});
    if(!isAuth){
        return res.status(404).send({msg : "You have to Register first"});
    }

    // if user not verify then throw error
    if(!isAuth.isActive){
        return res.status(400).send({msg : "You have to verify your account first!"})
    }

    // check password is password wrong then throw error
    let isPass = await bcrypt.compare(password, isAuth.password);

    if(!isPass){
        return res.status(400).send({msg : "Wrong Credentials!"})
    }

    // if all credentials currect then throw successful msg & token and category

    // Create token
    let token = await jwt.sign({ _id: isAuth._id }, process.env.SECRET_KEY);


    res.send({msg : "Login Successfully!", token, isAdmin : isAuth.isAdmin, isSeller : isAuth.isSeller})



 } catch (error) {
    return res.status(400).send({msg : "Somthing Went Wrong in Login"})
 }
}

module.exports = {loginController}