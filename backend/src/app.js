require("dotenv").config({path: '../../.env'});

const express = require("express");

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
    res.status(200).json({status:"OK", service: "Weather Analytics Platforms" });
});

module.exports = app;