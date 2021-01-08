import React from 'react';
import AudioPlayer from './AudioPlayer.jsx';
import { Router, Link } from '@reach/router';
import scroll from './ScrollOptions.js';

const Header = ({ displayNavModal }) => {
    window.addEventListener('scroll', () => {
        const start = window.pageYOffset;
        setTimeout(() => {
            const target = document.querySelector('.nav-bar');
            const end = window.pageYOffset;
            if (start - end < 0) {
                target.classList.add('nb-hide');
            } else if (start - end > 0) {
                target.classList.remove('nb-hide');
            }
        }, 50);
    });
    return (
        <div className="nav-bar">
            <div className="nav-bar__menu" onClick={() => displayNavModal()}>
                <ion-icon name="menu-outline"></ion-icon>
            </div>
            <h1 className="nav-bar__heading">Zoe Whittaker</h1>
        </div>
    );
};

export default Header;
