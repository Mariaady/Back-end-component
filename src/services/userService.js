let users = [
  {
    id: 1,
    name: "Sofía Martinez",
    username: "sofiaamartinez",
    password: "1234",
    profilePhoto: "https://randomuser.me/api/portraits/women/1.jpg",
    gmail: "sofia.martinez@gmail.com",
    pet: "Perro",
    size: "Mediano"
  },
  {
    id: 2,
    name: "Carlos Ramirez",
    username: "carlossramirez",
    password: "1234",
    profilePhoto: "https://randomuser.me/api/portraits/men/2.jpg",
    gmail: "carlos.ramirez@gmail.com",
    pet: "Gato",
    size: "Pequeño"
  },
  {
    id: 3,
    name: "Valentina Gómez",
    username: "valeentinagoomez",
    password: "1234",
    profilePhoto: "https://randomuser.me/api/portraits/women/3.jpg",
    gmail: "valentina.gomez@gmail.com",
    pet: "Gato",
    size: "Mediano"
  },
  {
    id: 4,
    name: "Andrés Torres",
    username: "anndresstorress",
    password: "1234",
    profilePhoto: "https://randomuser.me/api/portraits/men/4.jpg",
    gmail: "andres.torres@gmail.com",
    pet: "Perro",
    size: "Grande"
  },
]

exports.getUserInfo = async(userId) => {
    const userAux = users.find(u => u.id == userId)
    return userAux
}

exports.doLogin = async (username, password) => {
    const userAux = users.find(u => u.username == username && u.password == password)
    return userAux
}

