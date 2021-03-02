import React from 'react';
import { isScrolledIntoView } from '../js/Effects.js';

const Description = ({ instagram }) => {
    instagram = instagram.map((img, i) => {
        return (
            <div
                className={`description__img description__img--${i + 1}`}
                key={img.url}
            >
                <img
                    src={img.thumbnail}
                    alt="instagram photo"
                    onClick={() =>
                        window.open(
                            `https://www.instagram.com/zoewviolin/p/${img.url}/`
                        )
                    }
                ></img>
            </div>
        );
    });

    window.addEventListener('scroll', (e) => {
        const section = document.querySelector('.section-description');
        const heading = document.querySelector('.description__heading');
        const dark = document.querySelector('.description__heading--dark');

        if (section.getBoundingClientRect().bottom < window.innerHeight) {
            heading.style.opacity = `${
                3 -
                (window.innerHeight - section.getBoundingClientRect().bottom) /
                    100
            }`;
        } else if (section.getBoundingClientRect().top < 0) {
            heading.style.position = 'fixed';
            heading.style.opacity = '1';
        } else {
            heading.style.position = 'absolute';
            dark.style.opacity = `${
                section.getBoundingClientRect().top / 300 - 0.1
            }`;
        }

        //IMAGES
        const imgs = document.querySelectorAll('.description__img');
        imgs.forEach((img) => {
            if (isScrolledIntoView(img)) {
                const fade =
                    (window.innerHeight - img.getBoundingClientRect().top) /
                    window.innerHeight;
                img.style.opacity = `${fade}`;
            }
        });
    });

    return (
        <div className="section-description">
            <div className="description">
                <div id="gallery" className="description__heading ">
                    <h2>
                        Curated <span>music</span> for <br></br>weddings and
                        events.
                    </h2>
                </div>
                <div className="description__heading description__heading--dark">
                    <h2>
                        Curated <span>music</span> for <br></br>weddings and
                        events.
                    </h2>
                </div>
                {instagram}
            </div>
        </div>
    );
};

export default Description;
