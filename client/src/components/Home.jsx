import React from 'react';
import AudioPlayer from './AudioPlayer.jsx';
import Bio2 from './Bio2.jsx';
import Contact from './Contact.jsx';
import Description from './Description.jsx';
import Hero from './Hero.jsx';
import Hero2 from './HERO2.jsx';
import Links from './Links.jsx';
import VideoPlayer from './VideoPlayer.jsx';

const Home = () => {
    return (
        <div>
            {/* <Hero /> */}
            <Hero2 />
            <Bio2 />
            <Description />
            {/* <div id="audio-player" /> */}
            <AudioPlayer />
            {/* <div id="video-player" /> */}
            <VideoPlayer />
            <Contact />
        </div>
    );
};

export default Home;
