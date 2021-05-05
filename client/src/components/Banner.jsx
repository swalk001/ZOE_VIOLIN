import React from 'react';

const Banner = () => {
    const target = document.querySelectorAll('.banner__img');

    window.addEventListener('scroll', (e) => {
        if (target[0]) {
            let grow = 1 + target[0].getBoundingClientRect().y / -5000;
            let turn = target[0].getBoundingClientRect().y / -400;

            target[0].style.transform = `scale(${grow}) rotate(${turn}deg)`;
        }
    });
    return (
        <div className="section-banner">
            <div className="banner">
                <img
                    src="https://zoe-violin.s3.us-east-2.amazonaws.com/imgs/hetz387.jpg"
                    srcSet="https://zoe-violin.s3.us-east-2.amazonaws.com/imgs/hetz387-small.jpeg 600w, https://zoe-violin.s3.us-east-2.amazonaws.com/imgs/hetz387.jpg 1080w"
                    sizes="50vw"
                    alt="Zoe Whittaker"
                    className="banner__img"
                />
                <div className="banner__heading">
                    <span>Z</span>
                    <span>o</span>
                    <span>e</span>
                    <br></br>
                    <span>W</span>
                    <span>h</span>
                    <span>i</span>
                    <span>t</span>
                    <span>t</span>
                    <span>a</span>
                    <span>k</span>
                    <span>e</span>
                    <span>r</span>
                </div>
            </div>
        </div>
    );
};

export default Banner;
