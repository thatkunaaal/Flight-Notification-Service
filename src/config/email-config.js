const nodemailer = require("nodemailer");
const { EMAIL_PASS, EMAIL_USER } = require("./server-config");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

module.exports = {
  transporter: transporter,
};
