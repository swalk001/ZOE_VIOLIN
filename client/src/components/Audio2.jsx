import React, { useState } from 'react';
import Controls from './Controls.jsx';
import Songs from './Songs.jsx';
import samples from './Samples.js';

class Audio2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            songList: samples,
            audio: [],
            isPlaying: null,
            current: null,
            start: 0,
            progress: null,
        };
        this.handlePlay = this.handlePlay.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    componentDidMount() {
        this.handleLoad();
        // window.addEventListener('load', () => this.handleLoad());
    }

    handleLoad() {
        const audio = samples.map((sample) => {
            return new Howl({
                src: `../audio/${sample}.mp3`,
            });
        });
        this.setState({
            audio,
        });
    }

    handleStop() {
        const { current, progress } = this.state;

        current.stop();
        clearInterval(progress);
        this.progressBar(0);
        this.setState({
            isPlaying: null,
            progress: null,
        });
        this.hideProgressBar();
    }

    handlePlay(file = samples[0]) {
        const { current, songList, audio, isPlaying } = this.state;
        if (current !== null) {
            this.handleStop();
        }
        if (!audio.length) {
            return;
        }
        console.log(file);
        // console.log(songList);
        const song = audio[songList.indexOf(file)];
        this.setState(
            {
                start: Date.now(),
                isPlaying: file,
                current: song,
                progress: setInterval(
                    () => this.progressBar(song._duration),
                    10
                ),
            },
            () => song.play()
        );
        this.displayProgressBar();
    }

    handleNext() {
        const { songList, isPlaying } = this.state;
        let curr = songList.indexOf(isPlaying);
        curr = curr === songList.length - 1 ? 0 : curr + 1;
        this.handleStop();
        this.handlePlay(songList[curr]);
    }

    handlePrev() {
        const { songList, isPlaying } = this.state;

        let curr = songList.indexOf(isPlaying);
        curr = curr === 0 ? songList.length - 1 : curr - 1;
        this.handleStop();
        this.handlePlay(songList[curr]);
    }

    progressBar(dur) {
        const { start } = this.state;
        const time = (Date.now() - start) / 1000;
        const elapsed = (time / dur) * 100;
        const color = elapsed / 200;
        const target = document.querySelectorAll('.audio2__progress');
        if (!dur) {
            target[0].style.background = `linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.57) 100%,
                rgba(161, 152, 79, 0.66) 0%
            )`;
        } else if (target[0] && time < dur) {
            target[0].style.background = `linear-gradient(
            270deg,
            rgba(255, 255, 255, 0.57) ${100 - elapsed}%,
            rgba(161, 152, 79, ${0.4 + color}) 0%
        )`;
        }
    }

    displayProgressBar() {
        const target = document.querySelectorAll('.audio2__progress');
        target[0].style.transform = `scale(1) `;
    }

    hideProgressBar() {
        const target = document.querySelectorAll('.audio2__progress');
        target[0].style.transform = `scale(.1)`;
    }

    render() {
        const { songList, isPlaying, current } = this.state;

        return (
            <section className="section-audio2" id="audio-player">
                <div className="row">
                    <div className="audio2">
                        <div className="audio2__img-wrapper col-1-of-3">
                            <img
                                src="../imgs/VIOLIN.JPG"
                                alt="violin"
                                className="audio2__img"
                            />
                        </div>
                        <div id="audio" className="audio2__player col-2-of-3">
                            <Controls
                                isPlaying={isPlaying}
                                handleStop={this.handleStop}
                                handlePlay={this.handlePlay}
                                handleNext={this.handleNext}
                                handlePrev={this.handlePrev}
                            />
                            <div className="audio2__progress col-2-of-3"></div>
                        </div>
                        <div className="audio2__songs col-2-of-3">
                            <Songs
                                songList={songList}
                                handlePlay={this.handlePlay}
                                isPlaying={isPlaying}
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Audio2;
