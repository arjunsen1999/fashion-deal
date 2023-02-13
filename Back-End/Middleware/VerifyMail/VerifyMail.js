const nodemailer = require('nodemailer');
let userName_email = "arjunsen717@gmail.com";
let emailpassword = "grtkfxczybqnnhuu";

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: userName_email,
        pass: emailpassword
    }
});

async function sendMailer(to, url){
    let info = await transporter.sendMail({
        from: '"arjunsen", <fashion@deal.com>', // sender address
        to: to, // list of receivers
        subject: "Hello ✔", // Subject line
        // text: "Hello Everyone", // plain text body
        html: `<a>${url}</a>`, // html body
      });
}

module.exports = {sendMailer}