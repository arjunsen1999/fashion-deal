// path (http://localhost:8080/auth/:authId/verify/:token)

const {tokenModel} = require("../../Models/Token.model");
const {authModel} = require("../../Models/Auth.model");

const AuthVerification = async (req, res) =>{
    try {
        let {authId, token} = req.params;
        let isToken = await tokenModel.findOne({
            authId,
            token
        });
        if(!isToken){
            return res.status(404).send("<h1>404</h1>")
        }

        await authModel.updateOne({_id : authId}, {isActive : true});

        await tokenModel.deleteOne({authId});

        res.render("index")

    } catch (error) {
        return res.status(500).send({msg : "Somthing Went Wrong in Auth Verification", error})
    }
}

module.exports = {
    AuthVerification
}