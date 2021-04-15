import React from 'react';
import { isScrolledIntoView } from '../js/Effects.js';

const Gallery = ({ instagram }) => {
    instagram = instagram.map((img, i) => {
        return (
            <div
                className={`gallery__img gallery__img--${i + 1}`}
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
        const section = document.querySelector('.section-gallery');
        const heading = document.querySelector('.gallery__heading');
        const dark = document.querySelector('.gallery__heading--dark');

        if (section.getBoundingClientRect().bottom < window.innerHeight) {
            heading.style.opacity = `${
                3 -
                (window.innerHeight - section.getBoundingClientRect().bottom) /
                    100
            }`;
        } else if (section.getBoundingClientRect().top < 0) {
            heading.style.position = 'fixed';
        } else {
            heading.style.position = 'absolute';
            heading.style.opacity = `${
                1 - section.getBoundingClientRect().top / 600
            }`;
        }
    });

    return (
        <div className="section-gallery">
            <div className="gallery" id="gallery">
                <div className="gallery__heading ">
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

export default Gallery;
