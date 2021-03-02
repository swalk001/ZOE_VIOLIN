import React from 'react';
import { isScrolledIntoViewFromTop } from '../js/Effects';

const VideoPlayer = () => {
    const target = document.getElementsByClassName('video-player');
    const section = document.getElementsByClassName('section-video-player');

    window.addEventListener('scroll', () => {
        if (isScrolledIntoViewFromTop(section[0])) {
            target[0].classList.add('video-player--animate');
        } else {
            target[0].classList.remove('video-player--animate');
        }
    });

    return (
        <section className="section-video-player" id="video-player">
            <div className="video-player">
                <div className="video-player__heading-box">
                    <h2
                        className="video-player__heading"
                        data-rate="-.17"
                        data-direction="vertical"
                    >
                        media
                    </h2>
                </div>
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
        </section>
    );
};
export default VideoPlayer;
