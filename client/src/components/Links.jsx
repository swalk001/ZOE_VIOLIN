import React from 'react';

const Links = () => {
    return (
        <div className="links">
            <div className="links-img-box">
                <div className="links-left">
                    <img
                        alt="As Seen on The Knot"
                        src="https://www.xoedge.com/myaccount/2019/website-share/VendorBadge_AsSeenOnWeb.png"
                        onClick={() =>
                            window.open(
                                'https://www.theknot.com/marketplace/zoe-solo-violinist-charleston-sc-2040276'
                            )
                        }
                    ></img>
                    <img
                        alt="Wedding-Wire"
                        src="https://cdn1.weddingwire.com/assets/img/logos/gen_logoHeader.svg"
                        onClick={() =>
                            window.open(
                                'https://www.weddingwire.com/biz/zoe-solo-violinist/06c424cd71f91cc7.html'
                            )
                        }
                    ></img>
                </div>
                <div className="links-right">
                    <img
                        alt="Instagram_logo_2016"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png"
                        onClick={() =>
                            window.open('https://www.instagram.com/zoewviolin/')
                        }
                    ></img>
                    <img
                        src="https://www.ashleyhall.org/wp-content/themes/ashleyhall/-/img_min/logo.svg"
                        onClick={() =>
                            window.open('https://www.ashleyhall.org/')
                        }
                    ></img>
                </div>
            </div>
        </div>
    );
};

export default Links;
