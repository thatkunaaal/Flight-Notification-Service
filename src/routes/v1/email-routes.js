const express = require("express");
const { EmailController } = require("../../controllers");
const { EmailMiddleware } = require("../../middleware");
const router = express.Router();

router.post(
  "/",
  EmailMiddleware.validateCreateTicket,
  EmailController.createTicket
);

module.exports = router;
