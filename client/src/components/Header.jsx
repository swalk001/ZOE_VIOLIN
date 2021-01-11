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
            const header = document.querySelector('.nav-bar__heading');
            if (end > 200) {
                header.classList.add('nav-bar__heading--animate');
            } else {
                header.classList.remove('nav-bar__heading--animate');
            }
        }, 50);
    });
    return (
        <div className="nav-bar">
            <div className="nav-bar__menu">
                <ion-icon
                    name="menu-outline"
                    onClick={() => displayNavModal()}
                ></ion-icon>
            </div>
            <h1 className="nav-bar__heading">Zoe Whittaker</h1>
        </div>
    );
};

export default Header;
