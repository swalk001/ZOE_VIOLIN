import React from 'react';
import AudioPlayer from './AudioPlayer.jsx';
import Description from './Description.jsx';
import Hero from './Hero.jsx';
import Links from './Links.jsx';
import VideoPlayer from './VideoPlayer.jsx';

const Home = () => {
    return (
        <div>
            <Hero />
            <Description />
            <div id="audio-player" />
            <AudioPlayer />
            <div id="video-player" />
            <VideoPlayer />
            <Links />
        </div>
    );
};

export default Home;
