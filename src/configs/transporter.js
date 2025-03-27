const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  // service: "gmail",
  // auth: {
  //   user: process.env.FROM_EMAIL,
  //   pass: process.env.PASSWORD,
  // },
  // tls: {
  //   rejectUnauthorized: false,
  // },

  host: "smtpout.secureserver.net",
  secure: true,
  secureConnection: false,
  tls: {
    ciphers: "SSLv3",
  },
  requireTLS: true,
  port: 465,
  debug: true,
  auth: {
    user: "info@rheducationconsultants.com",
    pass: "@Rh#Edc786",
  },
});

module.exports = { transporter };
