const { transporter } = require("../configs/transporter");

const sendEmail = async ({ subject, htmlContent }) => {
  const mailOptions = {
    from: `"RH Consultants" <${process.env.FROM_EMAIL}>`,
    to: process.env.TO_EMAIL,
    subject: subject,
    html: htmlContent,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email Sent", info);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};

module.exports = { sendEmail };
