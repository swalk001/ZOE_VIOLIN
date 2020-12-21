import React from 'react';

const Footer = () => {
    return (
        <section className="section-footer">
            <div className="footer row">
                <div className="footer__social col-1-of-2">
                    <img
                        className="footer__social--knot"
                        alt="As Seen on The Knot"
                        src="https://www.xoedge.com/myaccount/2019/website-share/VendorBadge_AsSeenOnWeb.png"
                        onClick={() =>
                            window.open(
                                'https://www.theknot.com/marketplace/zoe-solo-violinist-charleston-sc-2040276'
                            )
                        }
                    ></img>
                    <img
                        className="footer__social--wire"
                        alt="Wedding-Wire"
                        src="https://cdn1.weddingwire.com/assets/img/logos/gen_logoHeader.svg"
                        onClick={() =>
                            window.open(
                                'https://www.weddingwire.com/biz/zoe-solo-violinist/06c424cd71f91cc7.html'
                            )
                        }
                    ></img>
                </div>
                <div className="footer__text col-1-of-2">
                    <p>Some footer text</p>
                </div>
            </div>
        </section>
    );
};

export default Footer;