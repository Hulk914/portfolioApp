'use strict';

const express = require('express');
const path = require('path');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

// App
const app = express();

var distDir = path.join(__dirname, 'dist', 'my-portfolio');
app.use(express.static(distDir));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'my-portfolio', 'index.html'))
});


app.listen(PORT);
console.log(`Running on http://${HOST}:${PORT}`);