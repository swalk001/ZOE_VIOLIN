import React from 'react';

const VideoPlayer = () => (
    <section className="section-video-player">
        <div className="video-player">
            <h2
                className="
                scroll video-player__heading"
                data-rate="-.17"
                data-direction="vertical"
            >
                VIDEOS
            </h2>
            <div className="video-player__video-box">
                <div className="video-player__video">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/-RTcRu7NuDQ"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <h1>Can't Help Falling In Love - Elvis Presley</h1>
                </div>
                <div className="video-player__video">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/wnTMPQX5c9I"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <h1>Canon in D - Pachelbel</h1>
                </div>
                <div className="video-player__video">
                    <iframe
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
        </div>
    </section>
);

export default VideoPlayer;
