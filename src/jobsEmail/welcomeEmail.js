const { sendEmail } = require("../services/emailService");

exports.sendWelcomeEmail = async (user) => {
  const subject = "¡Bienvenid@ a PawTrip!";
  const html = `
      <h3> Hola ${user.name}.</h3> 
      <p>Nos alegra muchísimo tenerte en <strong>PawTrip</strong></p>
      <p>Con PawTrip, descubrirás planes increíbles para viajar, pasear y disfrutar al máximo con tu mascota.</p>
      <p>Explora destinos pet-friendly, conecta con otros amantes de los animales y empieza tu próxima aventura juntos.</p>
      <p>¡Gracias por ser parte de esta comunidad que ama a los animales tanto como tú!</p>
      <p>El equipo de <strong>PawTrip</strong></p>`;
  try {
    await sendEmail(user.gmail, subject, html);
    console.log(`Correo de bienvenida enviado a ${user.name}`);
  } catch (error) {
    console.log("No se ha podido envíar el correo", error.message);
  }
};
