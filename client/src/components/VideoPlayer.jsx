import React from 'react';

const VideoPlayer = () => (
    <div>
        <h2
            className="scroll-heading2 video-player-h2"
            data-rate="-.09"
            data-direction="vertical"
        >
            VIDEOS
        </h2>
        <div id="video-player" className="video-player">
            <iframe
                className="video"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/-RTcRu7NuDQ"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <h1>Can't Help Falling In Love - Elvis Presley</h1>
            <iframe
                className="video"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/wnTMPQX5c9I"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <h1>Canon in D - Pachelbel</h1>
            <iframe
                className="video"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/1zeoP-lk17s"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <h1>Viva La Vida - Coldplay</h1>
        </div>
    </div>
);

export default VideoPlayer;
