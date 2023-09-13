require("dotenv").config();

const express = require('express');
const app = express();

// Configuração para permitir JSON no corpo das solicitações
app.use(express.json());

const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// DB connection
const connection = require('./config/db.js');

// Routes
const router = require('./routes/Router.js');
app.use(router);

// Send an Email
const sendEmail = require('./middlewares/sendEmail.js');
app.use('/send', sendEmail);

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {}
};

start();
