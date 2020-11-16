import React from 'react';

const NavBar = () => {
    return (
        <div className="nav-bar">
            <h1 className="header-name">Zoe Whittaker</h1>
            <ul className="main-nav">
                <li>
                    <a href="">BIO</a>
                </li>
                <li>
                    <a href="#">SONG LIST</a>
                </li>
                <li>
                    <a href="#">AUDIO</a>
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
