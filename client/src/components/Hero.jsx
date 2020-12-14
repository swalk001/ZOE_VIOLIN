import React from 'react';

const Hero = () => {
    return (
        <section className="section-hero">
            <div className="hero">
                <div className="row">
                    <img
                        className="hero__img scroll"
                        data-rate=".8"
                        data-direction="vertical"
                        src="../imgs/ZOE.JPG"
                        alt="Zoe"
                    />
                </div>
            </div>
            <span
                className="hero__img-box scroll"
                data-rate=".46"
                data-direction="vertical"
                alt="Zoe"
            />
        </section>
    );
};

export default Hero;
