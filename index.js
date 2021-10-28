const express  = require('express');
const debug    = require('debug')('app:server'); 
const app      = express();
const {Config} = require('./src/config/index');
const {TaskAPI}   = require('./src/tasks/index');

app.use(express.json());

// Modulos
TaskAPI(app);

app.listen(Config.port, () => debug(`Servidor escuchando en el puerto ${Config.port}`))