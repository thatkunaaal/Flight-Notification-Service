const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");

function validateCreateTicket(req, res, next) {
  if (!req.body) {
    ErrorResponse.error =
      "You should pass necessary fields while creating ticket.";

    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.subject) {
    ErrorResponse.error = "You should pass subject while creating ticket.";

    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.content) {
    ErrorResponse.error = "You should pass content while creating ticket.";

    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.recipentEmail) {
    ErrorResponse.error =
      "You should pass recipentEmail while creating ticket.";

    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  next();
}

module.exports = {
  validateCreateTicket,
};
