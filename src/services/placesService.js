const Place = require("../models/placesModel");
let places = [
  {
    id: 1,
    name: "Parque del Retiro",
    location: "Madrid",
    category: "parque",
    description:
      "Uno de los parques más grandes de Madrid con zonas verdes y áreas para pasear con tu mascota.",
    photo:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/53/53/2c/img-20160729-205021-largejpg.jpg?w=1000&h=-1&s=1",
  },
  {
    id: 2,
    name: "Montseny Natural Park",
    location: "Barcelona",
    category: "parque",
    description:
      "Parque natural ideal para rutas de senderismo con tu perro en plena naturaleza.",
    photo:
      "https://www.renfe.com/es/es/cercanias/cercanias-barcelona/ofertas-mas-populares/parc-natural-montseny/_jcr_content/root/rfslidercardsexperie/rfcardexperience-1.coreimg.jpeg/1658227425496/rodalies-montseny-cas.jpeg",
  },
  {
    id: 3,
    name: "Parque de María Luisa",
    location: "Sevilla",
    category: "parque",
    description:
      "Amplio parque urbano con sombra y caminos perfectos para pasear a tu mascota.",
    photo:
      "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/52000/52507-Maria-Luisa-Park.jpg",
  },
  {
    id: 4,
    name: "Hotel PetStay",
    location: "Valencia",
    category: "hotel",
    description:
      "Hotel moderno con habitaciones adaptadas para clientes con mascotas. Admiten perros de todos los tamaños.",
    photo:
      "https://s1.abcstatics.com/abc/www/multimedia/espana/2022/11/09/refugio-animales-RTt2bGR6548pakts0Q3DciO-1200x840@abc.jpg",
  },
  {
    id: 5,
    name: "RuralDog Inn",
    location: "Asturias",
    category: "hotel",
    description:
      "Casa rural pet-friendly con jardín y rutas cercanas para pasear a tu mascota.",
    photo:
      "https://www.viajes4patas.com/images/jsites2/v4p-41-casas-rurales-iris-de-paz-admite-mascotas-asturias-pilona-1.jpg",
  },
  {
    id: 6,
    name: "Café Patitas",
    location: "Málaga",
    category: "restaurante",
    description:
      "Cafetería acogedora donde los animales son bienvenidos tanto en terraza como en el interior.",
    photo:
      "https://s1.elespanol.com/2024/06/27/cocinillas/actualidad-gastronomica/866173656_247319524_1706x960.jpg",
  },
  {
    id: 7,
    name: "Bark&Bite",
    location: "Bilbao",
    category: "restaurante",
    description:
      "Restaurante informal con snacks para perros y bebederos en cada mesa de la terraza.",
    photo:
      "https://www.evahappydog.com/wp-content/uploads/2018/07/DogFriendlyLBC_188-750x400.jpg",
  },
  {
    id: 8,
    name: "Playa de Llevant",
    location: "Barcelona",
    category: "playa",
    description:
      "Playa urbana habilitada para perros durante todo el año, con duchas especiales para mascotas.",
    photo:
      "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/341000/341101-Llevant-Beach.jpg",
  },
  {
    id: 9,
    name: "Playa El Cable",
    location: "Marbella",
    category: "playa",
    description:
      "Zona costera ideal para disfrutar del mar con tu mascota en un entorno seguro.",
    photo:
      "https://offloadmedia.feverup.com/valenciasecreta.com/wp-content/uploads/2021/08/22064447/shutterstock_1036303372-1-1024x683.jpg",
  },
  {
    id: 10,
    name: "Área de descanso La Mancha",
    location: "A4, km 155",
    category: "area_descanso",
    description:
      "Zona tranquila en carretera con espacio verde para sacar a tu mascota.",
    photo:
      "https://blog.mascotaysalud.com/wp-content/uploads/elementor/thumbs/perro-comedero-bebedero-qo5en52wfxyyjiozxsfcykwcaxxzl6v15ycsw9366g.jpg",
  },
  {
    id: 11,
    name: "Área Canina del Ebro",
    location: "Zaragoza",
    category: "area_descanso",
    description:
      "Área de servicio con espacio vallado para que tu perro pueda estirar las patas.",
    photo:
      "https://www.paradise-ebro.com/wp-content/uploads/2019/10/WhatsApp-Image-2019-03-22-at-14.33.44-1-min.jpeg",
  },
];

exports.getAllPlaces = async () => {
  try {
    const allPlaces = await Place.find();
    return allPlaces;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getPlaceInfo = async (placeId) => {
  try {
    const place = await Place.findById(placeId);
    return place;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.createPlace = async (newPlace) => {
  try {
    const createdPlace = await Place.create(newPlace);
    return createdPlace;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.removePlace = async (placeId) => {
  try {
    await Place.findByIdAndDelete(placeId);
  } catch (error) {
    throw new Error(error.message);
  }
};
