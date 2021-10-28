const express = require('express');
const debug   = require('debug')('app:server'); 
const app     = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello world!'))

app.listen(port, () => console.log(`Example app listening on port port!`))