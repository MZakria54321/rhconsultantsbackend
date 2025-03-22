const { transporter } = require("../configs/transporter");

const sendEmail = async ({ email, subject, htmlContent }) => {
  const mailOptions = {
    from: `"RH Consultants" <${process.env.FROM_EMAIL}>`,
    bcc: process.env.TO_EMAIL,
    subject: subject,
    html: htmlContent,
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};

module.exports = { sendEmail };
