import React from 'react';
import AudioPlayer from './AudioPlayer.jsx';

const NavBar = ({ pageSelect }) => {
    return (
        <div className="nav-bar">
            <h1 className="header-name">
                <a href="#top" onClick={(e) => pageSelect(0)}>
                    Zoe Whittaker
                </a>
            </h1>
            <ul className="main-nav">
                <li>
                    <a onClick={(e) => pageSelect(0)} href="#">
                        HOME
                    </a>
                </li>
                <li>
                    <a onClick={(e) => pageSelect(2)} href="#">
                        BIO
                    </a>
                </li>
                <li>
                    <a onClick={(e) => pageSelect(3)} href="#song-list">
                        SONG LIST
                    </a>
                </li>
                <li>
                    <a onClick={(e) => pageSelect(0)} href="#audio-player">
                        AUDIO
                    </a>
                </li>
                <li>
                    <a onClick={(e) => pageSelect(0)} href="#video-player">
                        VIDEO
                    </a>
                </li>
                <li>
                    <a onClick={(e) => pageSelect(1)} href="#">
                        CONTACT
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;
