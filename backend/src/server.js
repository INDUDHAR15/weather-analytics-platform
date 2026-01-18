require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
require("./cron/weather.cron");

const app = require('./app');
app.use("/api/weather/analytics", require("./routes/weather.analytics.routes"));

const PORT = process.env.PORT || 3500;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});