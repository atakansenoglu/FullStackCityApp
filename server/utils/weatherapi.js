const http = require("http");

exports.getWeather = (req, res) => {
    
    const name = req.body.name;
    console.log("Weather apiye gelen şehir: " + name)

    // Weather Stack Response
    const tokenWeather = "d3b699d7e0efcb2154f7216f008eec1f";
    const urlWeather = "http://api.weatherstack.com/current?access_key=" + tokenWeather + "&query=" + name;
    // console.log(urlWeather)

    http.get(urlWeather, function (response) {
        console.log("Weather Stack API çalıştı!: " + response.statusCode);

        response.on("data", function (data) {
            const weatherData = JSON.parse(data);
            
            const temp = weatherData.current.temperature;
            // const desc = weatherData.current.weather_descriptions[0];
            // const imageURL = weatherData.current.weather_icons[0];

            // res.write("<p>The weather is currently " + desc + ".</p>");
            // res.write("<p>The temp in " + req.body.cityName + " is " + temp + " degrees Celcius.</p>");
            // res.write("<img src=" + imageURL + ">");
            
            // res.json({weather: temp});
            // console.log("Weather: " + weather);

            const weather = {
                weather: temp,
            }
            
        });
    });
}