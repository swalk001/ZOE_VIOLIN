import React from 'react';

const Header2 = () => {
    window.addEventListener('scroll', () => {
        setTimeout(() => {
            const target = document.querySelector('.header');
            const end = window.pageYOffset;
            if (end > 200) {
                target.classList.add('header--trans');
            } else if (end < 200) {
                target.classList.remove('header--trans');
            }
        }, 50);
    });
    return (
        <div className="section-header">
            <div className="header">
                {/* <div className="header__badge">
                    <a
                        target="_blank"
                        href="https://www.weddingwire.com/biz/zoe-solo-violinist/06c424cd71f91cc7.html"
                        title="WeddingWire Couples' Choice Award Winner 2021"
                    >
                        <img
                            alt="Zoe, Solo Violinist"
                            id="wp-ratedWA-img-2021"
                            src="https://cdn1.weddingwire.com/img/badges/2021/badge-weddingawards_en_US.png"
                        />
                    </a>

                    <img
                        // className="footer__social--knot"
                        alt="As Seen on The Knot"
                        src="https://www.xoedge.com/myaccount/2019/website-share/VendorBadge_AsSeenOnWeb.png"
                        onClick={() =>
                            window.open(
                                'https://www.theknot.com/marketplace/zoe-solo-violinist-charleston-sc-2040276'
                            )
                        }
                    ></img>
                </div> */}
                <div className="header__nav">
                    <ul className="header__nav--list">
                        <il className="header__nav--item">Home</il>
                        <il className="header__nav--item">Biography</il>
                        <il className="header__nav--item">Gallery</il>
                        <il className="header__nav--item">Music</il>
                        <il className="header__nav--item">Videos</il>
                        <il className="header__nav--item">Contact</il>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header2;
