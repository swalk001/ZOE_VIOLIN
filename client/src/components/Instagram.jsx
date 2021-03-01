import React, { useState, useEffect, useRef } from 'react';
import { isScrolledIntoViewFromTop } from '../js/Effects.js';

const Instagram = ({ instagram }) => {
    const [date, setDate] = useState(Date.now());
    instagram = instagram.map((img, i) => {
        return (
            <div
                className={`instagram__img instagram__img--${i + 1}`}
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
    const length = 16 - instagram.length;
    const first = instagram.slice(0, length);
    instagram = instagram.concat(first).slice(1);
    // let scroll;
    // useEffect(() => setBuffer(Date.now() - date), [scroll]);

    // const autoScroll = (toggle) => {
    //     if (!toggle) {
    //         clearInterval(scroll);
    //         return;
    //     }

    //     const start = date;
    //     const target = document.querySelector('.instagram');
    //     let appended = false;
    //     const length = instagram.length;
    //     let index = 0;

    //     scroll = setInterval(() => {
    //         if (target) {
    //             target.style.transform = `translateX(-${
    //                 (Date.now() - start + buffer) / 50.01
    //             }rem)`;
    //             let distance = target.style.transform
    //                 .split('-')[1]
    //                 .split('.')[0];
    //             if (
    //                 distance > 0 &&
    //                 distance % 100 === 0 &&
    //                 !appended &&
    //                 target
    //             ) {
    //                 appended = true;
    //                 const clone = target.childNodes[index++].cloneNode(true);
    //                 if (index > length - 1) index = 0;
    //                 target.append(clone);
    //             } else {
    //                 appended = false;
    //             }
    //         }
    //     }, 10);
    // };

    // autoScroll(true);

    //BADGE ANIMATION
    const target1 = document.querySelector('.instagram__badge');
    let target2 = document.querySelector('.instagram');
    const target3 = document.querySelector('.instagram__badge--knot');
    const inView = document.querySelector('.section-instagram');

    window.addEventListener('scroll', () => {
        if (inView && isScrolledIntoViewFromTop(inView)) {
            target1.classList.add('instagram__badge--animate-in');
            if (target3) {
                target3.classList.add('instagram__badge--knot-animate');
            }
            for (let child of target2.children) {
                child.classList.add('instagram__img--animate');
            }
        } else if (window.scrollY < 100) {
            target1.classList.remove('instagram__badge--animate-in');
            target3.classList.remove('instagram__badge--knot-animate');
            for (let child of target2.children) {
                child.classList.remove('instagram__img--animate');
            }
        }
    });

    return (
        <div className="section-instagram">
            <div className="instagram__badge--knot">
                <img
                    alt="As Seen on The Knot"
                    src="https://www.xoedge.com/myaccount/2019/website-share/VendorBadge_AsSeenOnWeb.png"
                    onClick={() =>
                        window.open(
                            'https://www.theknot.com/marketplace/zoe-solo-violinist-charleston-sc-2040276'
                        )
                    }
                ></img>
            </div>
            <div className="instagram__badge">
                <a
                    target="_blank"
                    href="https://www.weddingwire.com/biz/zoe-solo-violinist/06c424cd71f91cc7.html"
                    title="WeddingWire Couples' Choice Award Winner 2021"
                >
                    <img
                        alt="Zoe, Solo Violinist"
                        src="https://cdn1.weddingwire.com/img/badges/2021/badge-weddingawards_en_US.png"
                    />
                </a>
            </div>
            <div className="instagram">
                {instagram ? instagram : '...Loading'}
            </div>
        </div>
    );
};

export default Instagram;
