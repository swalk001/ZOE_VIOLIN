import React from 'react';

const Header2 = () => {
    // window.addEventListener('scroll', () => {
    //     setTimeout(() => {
    //         const target = document.querySelector('.header');
    //         const end = window.pageYOffset;
    //         if (end > 100) {
    //             target.classList.add('header--trans');
    //         } else if (end < 100) {
    //             target.classList.remove('header--trans');
    //         }
    //     }, 50);
    // });
    return (
        <div className="section-header">
            <div className="header">
                <div className="header__links">
                    <div className="header__badge">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            onClick={() =>
                                window.open(
                                    'https://www.instagram.com/zoewviolin/'
                                )
                            }
                        >
                            <title>Logo Instagram</title>
                            <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" />
                            <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" />
                        </svg>
                    </div>
                    <div className="header__badge">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            onClick={() =>
                                window.open(
                                    'https://www.youtube.com/channel/UCYCWL195qGAayGUdToCKzZg'
                                )
                            }
                        >
                            <title>Logo Youtube</title>
                            <path d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9zM207 353.89v-196.5l145 98.2z" />
                        </svg>
                    </div>
                </div>
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
