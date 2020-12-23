import React from 'react';
import AudioPlayer from './AudioPlayer.jsx';
import { Router, Link } from '@reach/router';
import scroll from './ScrollOptions.js';

const Header = ({ displayNavModal }) => {
    return (
        <div className="nav-bar">
            <div className="nav-bar__menu" onClick={() => displayNavModal()}>
                <ion-icon name="menu-outline"></ion-icon>
            </div>
            <h1 className="nav-bar__heading">ZOE WHITTAKER</h1>
        </div>
    );
};

export default Header;
