const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.secureserver.net",
  port: 465,
  // service: "gmail",
  secure: true,
  auth: {
    user: process.env.FROM_EMAIL,
    pass: process.env.PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

module.exports = { transporter };
