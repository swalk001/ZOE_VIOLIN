import React from 'react';

const VideoPlayer = () => (
    <div>
        <div className="video-player">
            <iframe
                className="video"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/-RTcRu7NuDQ"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <iframe
                className="video"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/wnTMPQX5c9I"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <iframe
                className="video"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/1zeoP-lk17s"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    </div>
);

export default VideoPlayer;
