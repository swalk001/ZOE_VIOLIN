import React from 'react';
import { Router, Link } from '@reach/router';
import scroll from '../js/ScrollOptions.js';

const Navigation = ({ navModal, displayNavModal, hideNavModal }) => {
    const handleNav = (id = null) => {
        hideNavModal();
        if (!id) {
            scroll.top();
        } else {
            scroll.spot(id);
        }
    };
    if (navModal) {
        return (
            <section className="section-navigation">
                <div className="navigation navigation--open">
                    <div
                        className="navigation__exit"
                        onClick={() => hideNavModal()}
                    >
                        <ion-icon name="close-outline"></ion-icon>
                    </div>
                    <ul className="navigation__ul">
                        <li onClick={() => handleNav()}>Home</li>
                        <li onClick={() => handleNav('bio')}>Bio</li>
                        <li onClick={() => handleNav('video-player')}>
                            Videos
                        </li>
                        <li onClick={() => handleNav('audio-player')}>Songs</li>

                        <li onClick={() => handleNav('contact')}>Contact</li>
                    </ul>
                </div>
            </section>
        );
    } else {
        return <div></div>;
    }
};
export default Navigation;
