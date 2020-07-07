'use strict';

const express = require('express');
require('dotenv').config();
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World'+process.env.myenvvar);


});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
