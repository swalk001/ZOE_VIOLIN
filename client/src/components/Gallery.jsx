import React, { useState } from 'react';

const Gallery = () => {
    const [photos, setPhotos] = useState([1, 2, 3]);
    const browse = (index) => {
        setPhotos(
            photos.map((i) => {
                if (i + index > 4) {
                    return 1;
                } else if (i + index < 1) {
                    return 4;
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
                                        src={`../imgs/ZOE_CHRISTIAN_PLAYING${photo}.jpg`}
                                        alt="duo"
                                    />
                                </div>
                            );
                        })}
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
