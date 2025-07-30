const { sendWelcomeEmail } = require("../jobsEmail/welcomeEmail");

let users = [
  {
    id: 1,
    name: "Sofía Martinez",
    username: "sofiaamartinez",
    password: "1234",
    profilePhoto:
      "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uYXxlbnwwfHwwfHx8MA%3D%3D",
    gmail: "sofia.martinez@gmail.com",
    pets: [
      {
        namePet: "Rocky",
        species: "perro",
        breed: "Border Collie",
        size: "mediano",
        age: "4",
        photo:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fonlyfresh.com%2Fblogs%2Fnoticias%2Fcomo-educar-a-un-border-collie&psig=AOvVaw0mBMK0ieLOs12ff4Hm_CWC&ust=1753799110669000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwjmq6H54N-OAxWKdqQEHYjRIwoQjRx6BAgAEBo",
      },
    ],
  },
  {
    id: 2,
    name: "Carlos Ramirez",
    username: "carlossramirez",
    password: "1234",
    profilePhoto:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gmail: "carlos.ramirez@gmail.com",
    pets: [
      {
        namePet: "Luna",
        species: "gato",
        breed: "Scottish Fold",
        size: "pequeño",
        age: "2",
        photo:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.purina.es%2Fencuentra-mascota%2Frazas-de-gato%2Ffold-escoces&psig=AOvVaw1W1wQb6BwZenXhODYOZ5xr&ust=1753799131931000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwitg7OD4d-OAxU3WqQEHfsLN_UQjRx6BAgAEBo",
      },
    ],
  },
  {
    id: 3,
    name: "Valentina Gómez",
    username: "valeentinagoomez",
    password: "1234",
    profilePhoto:
      "https://img.freepik.com/foto-gratis/estilo-vida-emociones-gente-concepto-casual-confiado-agradable-sonriente-mujer-asiatica-brazos-cruzados-pecho-seguro-listo-ayudar-escuchando-companeros-trabajo-participando-conversacion_1258-59335.jpg?semt=ais_hybrid&w=740",
    gmail: "valentina.gomez@gmail.com",
    pets: [
      {
        namePet: "Simba",
        species: "gato",
        breed: "Maine Coon",
        size: "mediano",
        age: "5",
        photo:
          "https://mymodernmet.com/wp/wp-content/uploads/2020/10/maine-coon-cats-6.jpg",
      },
    ],
  },
  {
    id: 4,
    name: "Andrés Torres",
    username: "anndresstorress",
    password: "1234",
    profilePhoto:
      "https://img.freepik.com/foto-gratis/joven-hombre-barbudo-camisa-rayas_273609-5677.jpg?semt=ais_hybrid&w=740",
    gmail: "andres.torres@gmail.com",
    pets: [
      {
        namePet: "Thor",
        species: "perro",
        breed: "Pastor Alemán",
        size: "grande",
        age: "7",
        photo:
          "https://www.sentidoanimal.es/wp-content/uploads/2019/07/Pastor-alem%C3%A1n.jpg",
      },
    ],
  },
  {
    id: 5,
    name: "María Ramirez",
    username: "mariaady",
    password: "1234",
    role: "admin",
    profilePhoto:
      "https://plus.unsplash.com/premium_photo-1690587673708-d6ba8a1579a5?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gmail: "maria.ramirez@gmail.com",
    pets: [
      {
        namePet: "Xena",
        species: "perro",
        breed: "American bully",
        size: "mediano",
        age: "12",
        photo:
          "https://www.conductorespreventor.es/wp-content/uploads/2025/01/American-bully-licencia-ppp-1030x687.jpg",
      },
    ],
  },
];

exports.getUserInfo = async (userId) => {
  const userAux = users.find((u) => u.id == userId);
  return userAux;
};

exports.doLogin = async (username, password) => {
  const userAux = users.find(
    (u) => u.username == username && u.password == password
  );
  return userAux;
};

exports.createUserInfo = async (newUser) => {
  const userAux = {
    id: Math.random().toFixed(5) * 10000,
    isActive: false,
    ...newUser,
  };

  users.push({
    ...userAux,
  });
  await sendWelcomeEmail(userAux);
  return userAux;
};

exports.modifyUser = async (editedUser) => {
  const userAux = users.filter((u) => u.id != editedUser.id);
  userAux.push(editedUser);
  users = userAux;
};

exports.addBooking = async (userId, placeId) => {
  const userAux = users.find((u) => u.id == userId);

  if (userAux.cart) {
    userAux.cart.push({
      placeId,
    });
  } else {
    userAux.cart = [
      {
        placeId,
      },
    ];
  }

  const userListAux = users.filter((u) => u.id != userId);
  userListAux.push(userAux);
  users = userListAux;
  return userAux;
};

exports.removeBooking = async (userId, placeId) => {
  const userAux = users.find((u) => u.id == userId);
  if (userAux && userAux.cart) {
    userAux.cart = userAux.cart.filter((b) => b.placeId != placeId);
  }

  const userListAux = users.filter((u) => u.id != userId);
  userListAux.push(userAux);
  users = userListAux;
  return userAux;
};
