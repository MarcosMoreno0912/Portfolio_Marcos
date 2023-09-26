const express = require("express");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const router = require("./routes/index.js");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const nodemailer = require('nodemailer');
const { EMAIL_PASSWORD } = process.env;

const server = express();

server.name = 'Marcos-Portfolio'

server.use(morgan("dev"));
server.use(express.json());
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	next();
});

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'moreno83marcos@gmail.com',
    pass: EMAIL_PASSWORD,
  },
});

server.use('/', router);

server.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});

module.exports = server;