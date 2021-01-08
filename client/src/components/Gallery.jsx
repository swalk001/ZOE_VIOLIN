import React, { useState } from 'react';
import { isScrolledIntoViewFromTop } from './Effects';

const Gallery = ({ autoScroll, toggleScroll, instagram }) => {
    const [photos, setPhotos] = useState([0, 1, 2, 3, 4, 5]);

    instagram = instagram.map((img) => [img.thumbnail, img.url]);
    const browse = (index = 0) => {
        if (index !== 0) {
            toggleScroll();
        } else {
            index = 1;
        }
        setPhotos(
            photos.map((i) => {
                if (i + index > instagram.length - 1) {
                    return 0;
                } else if (i + index < 0) {
                    return instagram.length - 1;
                } else {
                    return index + i;
                }
            })
        );
    };

    const target = document.getElementsByClassName('gallery');
    const section = document.getElementsByClassName('section-gallery');

    window.addEventListener('scroll', () => {
        if (isScrolledIntoViewFromTop(section[0])) {
            target[0].classList.add('gallery--animate');
        } else {
            target[0].classList.remove('gallery--animate');
        }
    });

    return (
        <section className="section-gallery">
            <div className="row">
                <div className="gallery">
                    <div
                        className="gallery__btn gallery__btn--prev"
                        onClick={() => {
                            browse(-1);
                        }}
                    >
                        <ion-icon name="chevron-back-outline"></ion-icon>
                    </div>
                    <div className="gallery__img-box">
                        {photos.map((photo) => {
                            return (
                                <div
                                    className="gallery__img col-1-of-3"
                                    key={photo}
                                >
                                    <img
                                        src={
                                            instagram[photo]
                                                ? instagram[photo][0]
                                                : instagram[photo]
                                        }
                                        alt="instagram"
                                        onClick={() =>
                                            window.open(
                                                `https://www.instagram.com/zoewviolin/p/${
                                                    instagram[photo]
                                                        ? instagram[photo][1]
                                                        : instagram[photo]
                                                }/`
                                            )
                                        }
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <div
                        className="gallery__icon"
                        onClick={() =>
                            window.open('https://www.instagram.com/zoewviolin/')
                        }
                    >
                        <ion-icon name="logo-instagram"></ion-icon>
                    </div>
                    <div
                        className="gallery__btn gallery__btn--next"
                        onClick={() => {
                            browse(1);
                        }}
                    >
                        <ion-icon name="chevron-forward-outline"></ion-icon>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
