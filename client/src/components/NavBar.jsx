import React from 'react';
import AudioPlayer from './AudioPlayer.jsx';
import NavModal from './NavModal.jsx';
import { Router, Link } from '@reach/router';
import scroll from './ScrollOptions.js';

const NavBar = ({ displayNavModal }) => {
    return (
        <div className="nav-bar">
            <button
                className="nav-modal-open"
                onClick={() => displayNavModal()}
            >
                ________ ______ ________
            </button>
            <h1 className="header-name">
                <Link to="/" onClick={() => scroll.top()}>
                    ZOE WHITTAKER
                </Link>
            </h1>
            {/* <ul className="main-nav">
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
                    <Link to="/" onClick={() => scroll.spot('audio-player')}>
                        AUDIO
                    </Link>
                </li>
                <li>
                    <Link to="/" onClick={() => scroll.spot('video-player')}>
                        VIDEO
                    </Link>
                </li>
                <li>
                    <Link to="/" onClick={() => scroll.spot('contact')}>
                        CONTACT
                    </Link>
                </li>
            </ul> */}
        </div>
    );
};

export default NavBar;
