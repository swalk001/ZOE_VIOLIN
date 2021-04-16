import React, { Fragment } from 'react';

const Packages = () => {
    return (
        <Fragment>
            <section className="section-packages">
                <div className="packages">
                    <h2 className="packages__heading">Packages</h2>
                    <div className="packages__wrapper">
                        <div className="packages__option">
                            <div className="packages__img">
                                <h1>Solo Violin</h1>
                                <img
                                    src="https://zoe-violin.s3.us-east-2.amazonaws.com/imgs/febfilm_+68+(1).jpg"
                                    alt=""
                                />
                            </div>
                            <p>
                                The Solo Violin offers a simple yet classic
                                sound to any Ceremony, Cocktail Hour, or event.
                                The violin creates a warm ambience to all
                                environments and is able to play any melody
                                making the song selections endless. The violin
                                is also able to be amplified (a small and easy
                                set up) which can help control the volume for
                                each given venue size and environment. Please
                                inquire for more details.
                            </p>
                        </div>
                        <div className="packages__option">
                            <div className="packages__img">
                                <h1>Violin Duo</h1>
                                <img
                                    src="https://zoe-violin.s3.us-east-2.amazonaws.com/imgs/ZOE_CHRISTIAN.jpg"
                                    alt=""
                                />
                            </div>
                            {/* <h2>Guitar or Piano/Keyboard</h2> */}
                            <p>
                                The Violin/Guitar Duo and the Violin/Keyboard
                                Duo offer a fuller and richer sound to any
                                Ceremony, Cocktail Hour, or event. The guitar
                                and piano provide a strong rhythmic and harmonic
                                element to the melodious violin. The Duo can
                                articulate any genre or style of music as well.
                                Both Duo sets are able to be amplified (a small
                                and easy set up) which can help craft the volume
                                for each given venue size and environment.
                                Please inquire for more details.
                            </p>
                        </div>
                    </div>
                    <div className="packages__songs">
                        <a
                            href="./imgs/ZoeViolin Song List.pdf"
                            download="song-list"
                        >
                            <button className="packages__songs--button">
                                Song List
                            </button>
                        </a>
                    </div>
                    <p className="packages__info">
                        **All Packages accept song requests.**
                        <br></br>
                        **Additional audio samples can be provided upon
                        request.**
                    </p>
                </div>
            </section>
        </Fragment>
    );
};

export default Packages;
