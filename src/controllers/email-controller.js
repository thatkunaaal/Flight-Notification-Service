const { StatusCodes } = require("http-status-codes");
const { EmailService } = require("../services");
const { ErrorResponse, SuccessResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

async function createTicket(req, res) {
  try {
    const ticket = await EmailService.createTicket({
      subject: req.body.subject,
      content: req.body.content,
      recipentEmail: req.body.recipentEmail,
    });

    SuccessResponse.data = ticket;

    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    console.log(error);
    ErrorResponse.error = error;

    if (error instanceof AppError) {
      return res.status(error.StatusCodes).json(ErrorResponse);
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

module.exports = {
  createTicket,
};
