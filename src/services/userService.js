let users = [
  {
    id: 1,
    name: "Sofía Martinez",
    username: "sofiaamartinez",
    password: "1234",
    profilePhoto: "https://images.app.goo.gl/BRfMfAsUVt4LhUMj7",
    gmail: "sofia.martinez@gmail.com",
    pets: [
      {
        namePet: "Rocky",
        species: "perro",
        breed: "Border Collie",
        size: "mediano",
        age: "4",
        photo: "https://images.app.goo.gl/rnb2CXWNjc8UAHgJ7"
      }
    ]
  },
  {
    id: 2,
    name: "Carlos Ramirez",
    username: "carlossramirez",
    password: "1234",
    profilePhoto: "https://images.app.goo.gl/ZgA7vygn87NraJwC9",
    gmail: "carlos.ramirez@gmail.com",
    pets: [
      {
        namePet: "Luna",
        species: "gato",
        breed: "Scottish Fold",
        size: "pequeño",
        age: "2",
        photo: "https://images.app.goo.gl/3SEnRvE934TBGJ1h7"
      }
    ]
  },
  {
    id: 3,
    name: "Valentina Gómez",
    username: "valeentinagoomez",
    password: "1234",
    profilePhoto: "https://images.app.goo.gl/QejSQNGBoE9aJabW8",
    gmail: "valentina.gomez@gmail.com",
    pets: [
      {
        namePet: "Simba",
        species: "gato",
        breed: "Maine Coon",
        size: "mediano",
        age: "5",
        photo: "https://images.app.goo.gl/mJ8jo2RULqD2GAcCA"
      }
    ]
  },
  {
    id: 4,
    name: "Andrés Torres",
    username: "anndresstorress",
    password: "1234",
    profilePhoto: "https://images.app.goo.gl/jc5S9NtzcYDRjDjb7",
    gmail: "andres.torres@gmail.com",
    pets: [
      {
        namePet: "Thor",
        species: "perro",
        breed: "Pastor Alemán",
        size: "grande",
        age: "7",
        photo: "https://images.app.goo.gl/2Sy1DKLhwqUjXAYS9"
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

exports.modifyUser = async(editedUser) => {
  const userAux = users.filter((u) => u.id != editedUser.id)
  userAux.push(editedUser)
  users = userAux
}

exports.addBooking = async(userId, placeId) => {
  const userAux = users.find(u => u.id == userId)

  if(userAux.cart) {
    userAux.cart.push({
      placeId
    })
  } else {
    userAux.cart = [
      {
        placeId
      }
    ]
  }

  const userListAux = users.filter(u => u.id != userId)
  userListAux.push(userAux)
  users = userListAux
  return userAux
}

