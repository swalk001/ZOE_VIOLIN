import React from 'react';
import { Router, Link } from '@reach/router';

const NavModal = ({ navModal, displayNavModal }) => {
    if (navModal) {
        return (
            <div className="nav-modal-wrapper">
                <ul className="main-nav">
                    <li>
                        <Link to="/" onClick={() => scroll.top()}>
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link to="/" onClick={() => scroll.spot('bio')}>
                            BIO
                        </Link>
                    </li>
                    <li>
                        <Link to="song-list" onClick={() => scroll.top()}>
                            SONG LIST
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/"
                            onClick={() => scroll.spot('audio-player')}
                        >
                            AUDIO
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/"
                            onClick={() => scroll.spot('video-player')}
                        >
                            VIDEO
                        </Link>
                    </li>
                    <li>
                        <Link to="/" onClick={() => scroll.spot('contact')}>
                            CONTACT
                        </Link>
                    </li>
                </ul>
            </div>
        );
    } else {
        return <div></div>;
    }
};

export default NavModal;
