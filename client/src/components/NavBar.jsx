import React from 'react';
import AudioPlayer from './AudioPlayer.jsx';

const NavBar = () => {
    return (
        <div className="nav-bar">
            <h1 className="header-name">
                <a href="#top">Zoe Whittaker</a>
            </h1>
            <ul className="main-nav">
                <li>
                    <a href="#bio">BIO</a>
                </li>
                <li>
                    <a href="#">SONG LIST</a>
                </li>
                <li>
                    <a href="#audio-player">AUDIO</a>
                </li>
                <li>
                    <a href="https://www.youtube.com/watch?v=wnTMPQX5c9I">
                        VIDEO
                    </a>
                </li>
                <li>
                    <a href="#">CONTACT</a>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;
