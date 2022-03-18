const https = require("https");
const { Cities } = require("../models")

exports.getCoordinates = (req, res) => {

    const name = req.body.name;
    console.log("coordapiye gelen şehir: " + name)

    // Mapbox Response
    const limit = "limit=1"
    const tokenMapbox = "pk.eyJ1IjoiYXRha2Fuc2Vub2dsdSIsImEiOiJjbDBwMjJ6aXUxcjVjM2JxdGJ1czcwN2J3In0.xqy4c8AW-uEsxNHFa8LemA";
    const urlMapbox = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + name + ".json?" + limit + "&access_token=" + tokenMapbox;

    https.get(urlMapbox, function (response) {
        console.log("Mapbox API çalıştı: " + response.statusCode);

        response.on("data", function (chunk) {
            const mapboxData = JSON.parse(chunk);

            const longitude = mapboxData.features[0].center[0];
            const latitude = mapboxData.features[0].center[1];

            res.json({longitude: longitude, latitude: latitude})
            // console.log("Longitude: " + longitude + ", Latitude: " + latitude);

            const city = {
                longitude: longitude,
                latitude: latitude,
                name: req.body.name,
            }
            
            Cities.create(city)

        });

    })
}