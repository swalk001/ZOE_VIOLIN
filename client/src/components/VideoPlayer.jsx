import React from 'react';

const VideoPlayer = () => (
    <section className="section-video-player" id="video-player">
        <div className="video-player">
            <h2
                className="video-player__heading scroll-horizontal"
                data-rate="-.17"
                data-direction="vertical"
            >
                MEDIA
            </h2>
            <div className="video-player__video-box">
                <div className="video-player__video">
                    <iframe
                        src="https://www.youtube.com/embed/-RTcRu7NuDQ"
                        scrolling="no"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <h1>Can't Help Falling In Love - Elvis Presley</h1>
                </div>
                <div className="video-player__video">
                    <iframe
                        src="https://www.youtube.com/embed/wnTMPQX5c9I"
                        scrolling="no"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <h1>Canon in D - Pachelbel</h1>
                </div>
                <div className="video-player__video">
                    <iframe
                        src="https://www.youtube.com/embed/1zeoP-lk17s"
                        frameBorder="0"
                        scrolling="no"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <h1>Viva La Vida - Coldplay</h1>
                </div>
            </div>
        </div>
        <span
            className="video-player__img-box scroll"
            data-rate="-.1"
            data-direction="vertical"
            alt="Zoe"
        />
    </section>
);

export default VideoPlayer;
