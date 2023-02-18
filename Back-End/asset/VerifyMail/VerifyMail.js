const nodemailer = require('nodemailer');
let userName_email = "fashion.deal.query@gmail.com";
let emailpassword = "zqmxnvvcqcbwezvl";

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: userName_email,
        pass: emailpassword
    }
});

async function sendMailer(to, url, html){
    let info = await transporter.sendMail({
        from: '"arjunsen", <fashion@deal.com>', // sender address
        to: to, // list of receivers
        subject: "Email Verification ✔", // Subject line
        // text: "Hello Everyone", // plain text body
        html // html body
      });
}

module.exports = {sendMailer}