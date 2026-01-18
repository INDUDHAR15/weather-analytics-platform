require('dotenv').config(); 
const express = require('express');
const weatherRoutes = require('./routes/weather.routes');
const errorMiddleware = require('./middlewares/error.middleware');

const app = express();
app.use(express.json());
app.use("/api/weather/analytics", require("./routes/weather.analytics.routes"));


app.get("/health", (req, res) => {
    res.status(200).json({status:"OK", service: "Weather Analytics Platforms" });
});

app.use('/api/weather', weatherRoutes);
app.use(errorMiddleware);


module.exports = app;