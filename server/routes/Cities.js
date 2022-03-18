const express = require("express")
const router = express.Router()
const { Cities } = require("../models")
const coordsApi = require("../utils/coordapi")
// const weatherApi = require("../utils/weatherapi")
// const cityController = require("../controllers/cityController")

router.get("/", (req, res) => {
    res.json("Hello")
});

router.get("/listAll", async (req, res) => {
    const listOfCities = await Cities.findAll()
    res.json(listOfCities)
});

router.post("/", (req, res) => {
    coordsApi.getCoordinates(req, res)
})

module.exports = router