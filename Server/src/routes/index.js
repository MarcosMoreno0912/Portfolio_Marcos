const { Router } = require('express');
const routes = Router();
const nodemailer = require('nodemailer');
/*const { EMAIL_PASSWORD } = process.env;*/
const dotenv = require('dotenv');
dotenv.config();

const routerProjects = require('./projectsRoutes/projectRoutes.js');

routes.use('/projects', routerProjects);

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 3001,
  secure: true,
  service: 'Gmail',
  auth: {
    user: 'moreno83marcos@gmail.com',
    pass: process.env.EMAIL_PASSWORD,
  },
});

routes.post('/enviar-correo', (req, res) => {
  const datosFormulario = req.body;
  console.log('datosFormulario');

  const { name, email, descripcion } = datosFormulario.user;
  const asunto = datosFormulario.user.asunto;
  
  const mailOptions = {
    from: 'moreno83marcos@gmail.com', // Tu dirección de correo Gmail
    to: 'moreno83marcos@gmail.com', // La dirección donde deseas recibir los mensajes
    subject: asunto,
    text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${descripcion}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al enviar el correo' });
    } else {
      console.log('Correo enviado: ' + info.response);
      res.status(200).json({ message: 'Correo enviado con éxito' });
    }
  });
});

module.exports = routes;