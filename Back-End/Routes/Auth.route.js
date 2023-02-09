const authRouter = require('express').Router();
const {Register} = require("../Controller/Auth/Register.controller")

authRouter.post("/register", Register)

module.exports = {authRouter}