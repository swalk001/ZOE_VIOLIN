import React, { Fragment } from 'react';
import { isScrolledIntoViewFromTop } from '../js/Effects.js';

const Packages = () => {
    //SECTION ANIMATION
    const target = document.getElementsByClassName('packages');
    const section = document.getElementsByClassName('section-packages');
    window.addEventListener('scroll', () => {
        if (isScrolledIntoViewFromTop(section[0])) {
            target[0].classList.add('packages--animate');
        } else {
            target[0].classList.remove('packages--animate');
        }
    });

    //CARD ANIMATION
    const card = document.getElementsByClassName('packages__option');
    const songButton = Array.from(
        document.getElementsByClassName('packages__songs--button')
    );

    const items = Array.from(card);
    window.addEventListener('scroll', () => {
        items.forEach((x) => {
            const top = x.getBoundingClientRect().top - 200;
            if (top > 400 && top < 1000) {
                let offset = (top - 400) / 10;
                x.style.transform = `rotate(${offset}deg) translate(0, ${offset}%)`;
            } else {
                x.style.transform = `rotate(0) translate(0, 0)`;
            }
        });
    });

    const info = [
        ...songButton,
        ...Array.from(document.getElementsByClassName('packages__info')),
    ];
    window.addEventListener('scroll', () => {
        info.forEach((x) => {
            const isVisible =
                x.getBoundingClientRect().top + 200 > window.innerHeight;
            if (isVisible) {
                x.classList.add('packages--animate');
            }
            if (x.getBoundingClientRect().top > window.innerHeight) {
                x.classList.remove('packages--animate');
            } else {
                x.classList.add('packages--animate');
            }
        });
    });
    return (
        <Fragment>
            <section className="section-packages">
                <div className="packages" id="packages">
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
                                Simple yet classic, the violin brings a warm
                                ambience to all environments. The violin is
                                capable of playing any melody making the song
                                selections endless. The violin is also able to
                                be amplified, please inquire for more details.
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
                                The Violin can be paired with either a Guitar or
                                Keyboard/Piano. Both offer a fuller sound and
                                provide a strong rhythmic and harmonic element
                                to the melodious violin. The Duo can articulate
                                any genre or style of music and can be
                                amplified. Please inquire for more details.
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
                        **All packages accept song requests**
                        <br></br>
                    </p>
                    <p className="packages__info">
                        <br></br>
                        **Additional audio samples can be provided upon
                        request**
                        <br></br>
                    </p>
                </div>
            </section>
        </Fragment>
    );
};

export default Packages;
