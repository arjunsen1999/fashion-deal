const authRouter = require('express').Router();
const {registerController} = require("../Controller/Auth/Register.controller")

authRouter.post("/register", registerController)

module.exports = {authRouter}