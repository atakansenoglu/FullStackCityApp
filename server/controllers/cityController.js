/* const { Cities } = require("../models")
const coordsApi = require("../utils/coordapi")
const weatherApi = require("../utils/weatherapi")

exports.create = (req, res) => {

    coordsApi.getCoordinates(req, test);
    weatherApi.getWeather(req, res);
    
    res.json({longitude: resCoordinate.longitude, latitude: resCoordinate.latitude, weather: resWeather.temp});

}; */