const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  EMAIL_USER: process.env.GMAIL_EMAIL,
  EMAIL_PASS: process.env.GMAIL_PASS,
  QUEUE_NAME: process.env.RABBITMQ_QUEUE_NAME,
};
