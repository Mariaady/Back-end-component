const { getAllPlaces, getPlaceInfo } = require("../services/placesService")

exports.getAllPlacesController = async (req, res) => {
    const resPlace = await getAllPlaces()
    res.status(200).send({ places: resPlace})
}

exports.getPlaceByIdController = async (req, res) => {
    const placeId = req.params.id
    const resPlaceInfo = await getPlaceInfo(placeId)
    res.status(200).send({ place: resPlaceInfo})
}
    