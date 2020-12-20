import React from 'react';

const Hero2 = () => {
    return (
        <section className="section-hero2">
            <div className="hero2">
                {/* <div className="row"> */}
                <div className="hero2__img-wrapper col-1-of-2">
                    <div className="hero2__package">
                        <h2>
                            SOLO <br></br>VIOLIN
                        </h2>
                        <img
                            className="hero2__img scroll"
                            // data-rate=".7"
                            data-direction="vertical"
                            src="../imgs/ZOE_STANDING.JPG"
                            alt="Zoe"
                        />
                    </div>
                    <div className="hero2__package">
                        <h2>
                            DUO<br></br>VIOLIN + GUITAR
                        </h2>
                        <img
                            className="hero2__img scroll"
                            // data-rate=".7"
                            data-direction="vertical"
                            src="../imgs/ZOE_CHRISTIAN.JPG"
                            alt="Zoe"
                        />
                    </div>
                    {/* </div> */}
                </div>
            </div>
            <span
                className="hero2__img-box scroll"
                data-rate=".46"
                data-direction="vertical"
                alt="Zoe"
            />
        </section>
    );
};

export default Hero2;
