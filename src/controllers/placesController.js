const { getAllPlaces } = require("../services/placesService")

exports.getAllPlacesController = async (req, res) => {
    const resPlace = await getAllPlaces()
    res.status(200).send({ places: resPlace})
}