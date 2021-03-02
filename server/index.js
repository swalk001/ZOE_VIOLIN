require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fetchInstagram = require('./functions/fetchInstagram');
const puppeteer = require('puppeteer');
const fetch = require('./functions/puppeteer');
const db = require('../database/index.js');

const app = express();

const PORT = 3001;

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '/../client/dist')));

app.get('/api/instagram', (req, res) => {
    // fetch();
    db.retrieveImages((err, images) => {
        if (err) {
            console.log(err);
        } else {
            res.send(images);
        }
    });
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
