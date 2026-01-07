const service =require('../service/weather.service');

exports.getWeather = async (requestAnimationFrame, res, next) => {
    try {
        const data = await service.getall();
        res.json({
            success: true,
            data
        });
    } catch (error) {
        next(error);
    }
}