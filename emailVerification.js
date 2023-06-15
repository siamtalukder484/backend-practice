const nodemailer = require("nodemailer");
const otptemplate = require("./emailtemplate/otptemplate");

async function emailV(sendmail,otp){
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "siam.cit.bd@gmail.com", // generated ethereal user
          pass: "tpqgrznwjsdtcjlc", // generated ethereal password
        },
      });

      let info = await transporter.sendMail({
        from: '"Email Test 👻"', // sender address
        to: sendmail, // list of receivers
        subject: "Hello ✔", // Subject line
        // html: `<h2>Thanks for this registration..</h2><p>Please verify your email</p><button style="background: black; color: #fff; border: none; padding:12px 20px; border-radious: 8px;">${otp}</button>`, // html body
        html: otptemplate(otp),
      });
    
}

module.exports = emailV