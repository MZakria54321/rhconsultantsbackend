const { contactEmailTemplate } = require("../../utilities/renderEmailPath");
const { sendEmail } = require("../../utilities/sendEmail");

module.exports.sendContactEmail = async (req, res, next) => {
  const { name, email, message, phone_no, subject } = req.body;
  try {
    if (!name || !email || !message || !subject) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const data = {
      name,
      email,
      message,
      phone_no,
      subject,
    };

    const htmlContent = await contactEmailTemplate(data);

    const info = await sendEmail({
      subject,
      htmlContent,
    });

    if (info) {
      res.status(200).json({
        success: true,
        message: "Thank you for reaching out! We will contact you soon.",
      });
    } else {
      res.status(500).json({
        success: false,
        message: "Failed to send the email. Please try again later.",
      });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};
