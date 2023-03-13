const authRouter = require("express").Router();
const {
  registerController,
} = require("../Controller/Auth/Register.controller");
const { loginController } = require("../Controller/Auth/Login.controller");
const {
  AuthVerification,
} = require("../Controller/Auth/AuthVerification.controller");
const { body } = require("express-validator");

// Register of any user, seller, admin || path (http://localhost:8080/auth/register)
authRouter
  .route("/register")
  .post(
    [
      body("fname", "Enter your first name").not().isEmpty(),
      body("lname", "Enter your Last name").not().isEmpty(),
      body("email", "Enter a vaild email").isEmail(),
      body("password", "Password length must be atleast 3").isLength({
        min: 3,
      }),
    ],
    registerController
  );

// Login of any user, seller, admin || path (http://localhost:8080/auth/login)
authRouter
  .route("/login")
  .post(
    [
      body("email", "Enter a vaild email").isEmail(),
      body("password", "Password length must be atleast 3").isLength({
        min: 3,
      }),
    ],
    loginController
  );

authRouter.route("/:authId/verify/:token").get(AuthVerification);

module.exports = { authRouter };
