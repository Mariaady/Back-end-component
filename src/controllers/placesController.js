const { getAllPlaces, getPlaceInfo, createPlace, removePlace } = require("../services/placesService")

exports.getAllPlacesController = async (req, res) => {
    const resPlace = await getAllPlaces()
    res.status(200).send({ places: resPlace})
}

exports.getPlaceByIdController = async (req, res) => {
    const placeId = req.params.id
    const resPlaceInfo = await getPlaceInfo(placeId)
    res.status(200).send({ place: resPlaceInfo})
}

exports.createPlaceController = async (req, res) => {
     try {
    const newPlace = req.body;
    const createdPlace = await createPlace(newPlace);
    res.status(200).send({ createdPlace });
  } catch (error) {
    console.error('Error creando lugar:', error);
    res.status(500).send({ error: error.message });
  }
}

exports.deletePlaceController = async (req, res) => {
  try {
    const placeId = req.params.id
    await removePlace(placeId)
    res.status(200).send({ message: 'El lugar ha sido eliminado con éxito' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}