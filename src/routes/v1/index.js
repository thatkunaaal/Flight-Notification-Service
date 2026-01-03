const express = require("express");
const { infoController } = require("../../controllers");
const router = express.Router();
const emailRoutes = require("./email-routes");

router.use("/tickets", emailRoutes);

router.get("/info", infoController);

module.exports = router;
