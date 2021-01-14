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
// app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static(path.join(__dirname, '/../client/dist')));

app.get('/api/instagram', (req, res) => {
    // newImages().then((data) => console.log(data));
    fetch();
    db.retrieveImages((err, images) => {
        if (err) {
            console.log(err);
            Promise.all(fetchInstagram()).then((imgs) => res.send(imgs));
        } else {
            res.send(images);
        }
    });
    // Promise.all(fetchInstagram()).then((imgs) => res.send(imgs));
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
