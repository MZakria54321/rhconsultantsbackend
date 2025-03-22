const express = require("express");
const router = express.Router();

const emailRoutes = require("./email");

router.use("/contact", emailRoutes);

module.exports = router;
