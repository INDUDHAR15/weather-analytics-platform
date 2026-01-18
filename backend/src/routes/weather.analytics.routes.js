const express = require("express");
const router = express.Router();

const analyticsController = require("../controller/weather.analytics.controller");

router.get("/summary", analyticsController.summary);
router.get("/daily", analyticsController.daily);

module.exports = router;
