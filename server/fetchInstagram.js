const axios = require('axios');

const fetchInstagram = () => {
    const access = process.env.ACCESS_TOKEN;

    let images = [
        'CIwWYRthLUN',
        'CIogqLrBUha',
        'CIdUKxOhBin',
        'CIcDeFVB4oK',
        'CHvHM_0AKPE',
        'CHbZvcOBBys',
        'CHY0yW7hv7C',
        'CHDRN8DBLoA',
        'CGI2slhhvre',
        'CFieKuNhGbK',
        'CEz07lKBBUk',
    ];

    const url = `https://graph.facebook.com/v9.0/instagram_oembed?url=https://www.instagram.com/p/`;

    const urlEnd = `/&access_token=${access}`;

    images = images.map((image) => {
        return axios.get(url + image + urlEnd).then((data) => {
            return {
                thumbnail: data.data.thumbnail_url,
                url: image,
            };
        });
    });

    return images;
};

module.exports = fetchInstagram;
