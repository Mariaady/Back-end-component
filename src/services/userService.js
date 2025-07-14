let users = [
  {
    id: 1,
    name: "Sofía Martinez",
    username: "sofiaamartinez",
    password: "1234",
    profilePhoto: "https://randomuser.me/api/portraits/women/1.jpg",
    gmail: "sofia.martinez@gmail.com",
    pets: [
      {
        namePet: "Rocky",
        species: "perro",
        breed: "Border Collie",
        size: "mediano",
        age: "4"
      }
    ]
  },
  {
    id: 2,
    name: "Carlos Ramirez",
    username: "carlossramirez",
    password: "1234",
    profilePhoto: "https://randomuser.me/api/portraits/men/2.jpg",
    gmail: "carlos.ramirez@gmail.com",
    pets: [
      {
        namePet: "Luna",
        species: "gato",
        breed: "Scottish Fold",
        size: "pequeño",
        age: "2"
      }
    ]
  },
  {
    id: 3,
    name: "Valentina Gómez",
    username: "valeentinagoomez",
    password: "1234",
    profilePhoto: "https://randomuser.me/api/portraits/women/3.jpg",
    gmail: "valentina.gomez@gmail.com",
    pets: [
      {
        namePet: "Simba",
        species: "gato",
        breed: "Maine Coon",
        size: "mediano",
        age: "5"
      }
    ]
  },
  {
    id: 4,
    name: "Andrés Torres",
    username: "anndresstorress",
    password: "1234",
    profilePhoto: "https://randomuser.me/api/portraits/men/4.jpg",
    gmail: "andres.torres@gmail.com",
    pets: [
      {
        namePet: "Thor",
        species: "perro",
        breed: "Pastor Alemán",
        size: "grande",
        age: "7"
      }
    ]
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

exports.createUserInfo = async (newUser) => {
  const userAux = {
    id: Math.random().toFixed(5) * 10000,
    ...newUser
  }

  users.push({
    ...userAux
  })
  return userAux
}

