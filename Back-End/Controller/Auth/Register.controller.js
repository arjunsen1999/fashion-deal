// path (http://localhost:8080/auth/register)
const { validationResult } = require('express-validator');

const registerController = async (req, res) =>{
  try {
   // If any error exists then throw Error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ msg : errors.array()[0].msg });
    }

    res.send(req.body)
  } catch (error) {
    res.status(400).send({msg : "Somthing Went Wrong in Register"})
  }
}

module.exports = {registerController}