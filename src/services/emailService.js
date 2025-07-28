
const nodemailer = require("nodemailer");

const emailConfig = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mariadeyllescas02@gmail.com",
    pass: "qtmk afbe kcyq nzeq",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendEmail = async (to, subject, html) => {
  try {
    const mailOptions = {
      from: "mariadeyllescas02@gmail.com",
      to: to,
      subject: subject,
      html: html,
    };

    await emailConfig.sendMail(mailOptions);
  } catch (error) {
    console.log("No se ha podido envíar el correo", error.message);
  }
};

module.exports = { sendEmail };