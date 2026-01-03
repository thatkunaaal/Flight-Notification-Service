const { Mailer, ServerConfig } = require("../config");
const { TicketRepository } = require("../repositories");
const ticketRepo = new TicketRepository();

async function sendMail(mailTo, subject, text) {
  try {
    const response = await Mailer.transporter.sendMail({
      from: ServerConfig.EMAIL_USER,
      to: mailTo,
      subject: subject,
      text: text,
    });
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function createTicket(data) {
  try {
    const response = await ticketRepo.create(data);
    return response;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  sendMail,
  createTicket,
};
