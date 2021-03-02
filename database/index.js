const mysql = require('mysql');

const con = mysql.createConnection({
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'password',
    database: process.env.MYSQL_DATABASE || 'zoeviolin',
});

con.connect(function (err) {
    if (err) {
        throw err;
    } else {
        console.log('Connected!');
    }
});

const retrieveImages = (callback) => {
    const query = 'SELECT * FROM images;';

    con.query(query, (err, results) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
};

const insertImages = (imgs) => {
    const drop = 'DROP TABLE IF EXISTS images;';
    const create = `CREATE TABLE images (
      url varchar(20) NOT NULL,
      thumbnail varchar(500) NOT NULL,
      PRIMARY KEY (URL)
    );`;
    con.query(drop, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            con.query(create, (err, results) => {
                if (err) {
                    console.log(err);
                } else {
                    imgs.forEach((img) => {
                        const query = `INSERT into images(url, thumbnail) VALUES ('${img.url}', '${img.thumbnail}');`;
                        con.query(query, (err, results) => {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log('inserted');
                            }
                        });
                    });
                }
            });
        }
    });
};
module.exports.retrieveImages = retrieveImages;
module.exports.insertImages = insertImages;
