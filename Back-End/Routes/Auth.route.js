const authRouter = require('express').Router();
const {registerController} = require("../Controller/Auth/Register.controller");
const {loginController} = require("../Controller/Auth/Login.controller")

// Register of any user, seller, admin || path (http://localhost:8080/auth/register)
authRouter.route("/register").post(registerController);

// Login of any user, seller, admin || path (http://localhost:8080/auth/login)
authRouter.route("/login").post(loginController)

module.exports = {authRouter}
