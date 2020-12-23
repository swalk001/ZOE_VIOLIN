import React from 'react';
import { Router, Link } from '@reach/router';
import scroll from './ScrollOptions.js';

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
                        <li onClick={() => handleNav()}>HOME</li>
                        <li onClick={() => handleNav('bio')}>BIO</li>
                        <li onClick={() => handleNav('video-player')}>VIDEO</li>
                        <li onClick={() => handleNav('audio-player')}>AUDIO</li>
                        <li onClick={() => handleNav('song-list')}>
                            SONG LIST
                        </li>
                        <li onClick={() => handleNav('contact')}>CONTACT</li>
                    </ul>
                </div>
            </section>
        );
    } else {
        return <div></div>;
    }
};

export default Navigation;
