const nodemailer = require("nodemailer");

async function emailV(sendmail){
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
        html: "<b>Hello This test is done</b>", // html body
      });
    
}

module.exports = emailV