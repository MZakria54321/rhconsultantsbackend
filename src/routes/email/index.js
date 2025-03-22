const express = require("express");
const { sendContactEmail } = require("../../controllers/email");
const router = express.Router();

router.route("/send-email").post(sendContactEmail);

module.exports = router;
