import React, { useState } from 'react';

const Gallery = ({ autoScroll, toggleScroll, instagram }) => {
    const [photos, setPhotos] = useState([0, 1, 2, 3, 4, 5]);
    // if (autoScroll) {
    //     setTimeout(() => browse(), 6000);
    // }

    const browse = (index = 0) => {
        if (index !== 0) {
            toggleScroll();
        } else {
            index = 1;
        }
        setPhotos(
            photos.map((i) => {
                console.log(photos);
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
                                        src={instagram[photo]}
                                        alt="instagram"
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
