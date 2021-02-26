import React from 'react';
import AudioPlayer from './AudioPlayer.jsx';
import Controls from './Controls.jsx';
import Songs from './Songs.jsx';
import samples from '../js/Samples.js';

class MusicPlayer extends React.Component {
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
        const target = document.querySelectorAll('.music__progress');
        if (!dur) {
            target[0].style.background = `linear-gradient(
              180deg,
              #ffffffc7 100%,
              rgb(112, 60, 68) 0%
          )`;
        } else if (target[0] && time < dur) {
            target[0].style.background = `linear-gradient(
          270deg,
         #ffffffc7  ${100 - elapsed}%,
         rgba(101, 74, 78, ${0.4 + color}) 0%
      )`;
        }
    }

    displayProgressBar() {
        const target = document.querySelectorAll('.music__progress');
        target[0].style.transform = `scale(1) translate(0, -100%)`;
    }

    hideProgressBar() {
        const target = document.querySelectorAll('.music__progress');
        target[0].style.transform = `scale(.1) translate(0, -200%)`;
    }

    render() {
        const { songList, isPlaying, current } = this.state;

        const player = document.getElementsByClassName('music')[0];
        if (player) {
            if (this.props.showMusic) {
                player.classList.remove('music--hide');
            } else {
                player.classList.add('music--hide');
            }
        }
        return (
            <div className="section-music">
                <div className="music">
                    <Songs
                        songList={songList}
                        handlePlay={this.handlePlay}
                        isPlaying={isPlaying}
                    />
                    <div className="music__playing">
                        <h2>{isPlaying ? isPlaying : ''}</h2>
                    </div>
                    <div className="music__progress"></div>
                    <div className="music__control">
                        <Controls
                            isPlaying={isPlaying}
                            handleStop={this.handleStop}
                            handlePlay={this.handlePlay}
                            handleNext={this.handleNext}
                            handlePrev={this.handlePrev}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default MusicPlayer;
