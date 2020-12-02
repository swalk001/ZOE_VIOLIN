import React from 'react';
import AudioPlayer from './AudioPlayer.jsx';
import Bio from './Bio.jsx';
import Contact from './Contact.jsx';
import Description from './Description.jsx';
import Hero from './Hero.jsx';
import Links from './Links.jsx';
import ParaHero from './ParaHero.jsx';
import ParaImage from './ParaImage.jsx';
import VideoPlayer from './VideoPlayer.jsx';

const Home = ({ displayModal, modal }) => {
    return (
        <div>
            <ParaHero />
            <Bio />
            <ParaImage />
            <AudioPlayer />
            {/* <Description /> */}
            <VideoPlayer />
            {/* <Links /> */}
            <Contact displayModal={displayModal} />
        </div>
    );
};

export default Home;
