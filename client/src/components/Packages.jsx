import React, { Fragment } from 'react';
import { isScrolledIntoViewFromTop } from '../js/Effects.js';

const Packages = () => {
    //SECTION ANIMATION
    // const target = document.getElementsByClassName('packages');
    // const section = document.getElementsByClassName('section-packages');
    // window.addEventListener('scroll', () => {
    //     if (isScrolledIntoViewFromTop(section[0])) {
    //         target[0].classList.add('packages--animate');
    //     } else {
    //         target[0].classList.remove('packages--animate');
    //     }
    // });

    //CARD ANIMATION
    const card = document.getElementsByClassName('packages__option');

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
        ...Array.from(
            document.getElementsByClassName('packages__songs--button')
        ),
        ...Array.from(document.getElementsByClassName('packages__info')),
        ...Array.from(document.getElementsByClassName('packages__type')),
        ...Array.from(document.getElementsByClassName('packages__text')),
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
                <div className="packages">
                    <h2 className="packages__heading">Packages</h2>
                    <div className="packages__wrapper" id="packages">
                        <div className="packages__option packages__option--solo">
                            <h1 className="packages__type">Solo</h1>
                            {/* <div className="packages__img">
                                <img
                                    src="https://zoe-violin.s3.us-east-2.amazonaws.com/imgs/febfilm_+68+(1).jpg"
                                    alt=""
                                />
                            </div> */}
                        </div>
                        <div className="packages__text-box-1">
                            <p className="packages__text">
                                Simple yet classic, the violin brings a warm
                                ambience to any atmosphere, small or large, and
                                is capable of playing any melody making song
                                selection endless.
                            </p>
                        </div>
                        <div className="packages__option packages__option--duo">
                            <h1 className="packages__type">Duo</h1>
                        </div>
                        <div className="packages__text-box-2">
                            <p className="packages__text">
                                The violin can be paired with either guitar or
                                keyboard. Both offer a full sound as well as
                                providing a strong rhythmic and harmonic element
                                to the melodious violin.
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
