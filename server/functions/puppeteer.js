const puppeteer = require('puppeteer');
const axios = require('axios');
const db = require('../../database/index');

const fetch = () => {
    return () => {
        const access = process.env.ACCESS_TOKEN;
        (async () => {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.setUserAgent(
                'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
            );

            await page.goto('https://www.instagram.com/');
            await page.waitForSelector('input[name="username"]');
            await page.type(
                'input[name="username"]',
                process.env.INSTAGRAM_USER
            );
            await page.type(
                'input[name="password"]',
                process.env.INSTAGRAM_PASSWORD
            );
            await page.click('button[type="submit"]');

            await page.waitForNavigation({
                waitUntil: ['load', 'networkidle0'],
            });

            await page.goto('https://www.instagram.com/zoewviolin/');

            const hrefs = await (
                await page.$$eval('a', (as) => as.map((a) => a.href))
            )
                .filter(
                    (url) => url.slice(0, 28) === 'https://www.instagram.com/p/'
                )
                .map((url) => url.slice(28, -1));

            await browser.close();
            return hrefs;
        })().then((img) => {
            const url = `https://graph.facebook.com/v9.0/instagram_oembed?url=https://www.instagram.com/p/`;

            const urlEnd = `/&access_token=${access}`;

            let images = img.map((image) => {
                return axios.get(url + image + urlEnd).then((data) => {
                    return {
                        thumbnail: data.data.thumbnail_url,
                        url: image,
                    };
                });
            });
            return Promise.all(images)
                .then((data) => db.insertImages(data))
                .catch((err) => console.log('caught', err));
        });
    };
};

module.exports = fetch();
