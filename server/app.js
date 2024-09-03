const express = require('express');
const bodyParser = require('body-parser');
const livroRoutes = require('./routes/livrosRoutes');
require('dotenv').config();
require('./config/database'); // Conectando ao banco de dados
const cors = require("cors")

const corsOptions = {
    origin: "http://localhost:5173"
}

const app = express();


// Middlewares
app.use(
    cors(corsOptions),
    bodyParser.json()
);


// Rotas
app.use('/livros', livroRoutes);


// Exportando a aplicação configurada
module.exports = app;

