const CrudRepository = require("./crud-repository");
const { ticket } = require("../models");

class TicketRepository extends CrudRepository {
  constructor() {
    super(ticket);
  }
}

module.exports = TicketRepository;
