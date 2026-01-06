const router = require("express").Router();
const { Weather } = require("../models");

router.get("/", async (_, res) => {
  const data = await Weather.findAll({ limit: 100 });
  res.json(data);
});

module.exports = router;
