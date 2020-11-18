import React, { useState } from 'react';
import Controls from './Controls.jsx';
import Songs from './Songs.jsx';
import samples from './Samples.js';

class AudioPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            songList: samples,
            isPlaying: null,
            current: null,
        };
        this.handlePlay = this.handlePlay.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    handleStop() {
        const { current } = this.state;

        current.stop();

        this.setState({
            isPlaying: null,
        });
    }

    handlePlay(audio = samples[0]) {
        const { current } = this.state;
        if (current !== null) {
            current.stop();
        }

        const song = new Howl({
            src: `../audio/${audio}.mp3`,
        });

        song.play();
        this.setState({
            isPlaying: audio,
            current: song,
        });
    }

    handleNext() {
        const { songList, isPlaying } = this.state;

        let curr = songList.indexOf(isPlaying);
        curr = curr === songList.length - 1 ? 0 : curr + 1;
        this.handlePlay(songList[curr]);
    }

    handlePrev() {
        const { songList, isPlaying } = this.state;

        let curr = songList.indexOf(isPlaying);
        curr = curr === 0 ? songList.length - 1 : curr - 1;
        this.handlePlay(songList[curr]);
    }

    render() {
        const { songList, isPlaying } = this.state;
        return (
            <div className="audio-player">
                <Controls
                    isPlaying={isPlaying}
                    handleStop={this.handleStop}
                    handlePlay={this.handlePlay}
                    handleNext={this.handleNext}
                    handlePrev={this.handlePrev}
                />
                <div className="audio-songs">
                    <Songs
                        songList={songList}
                        handlePlay={this.handlePlay}
                        isPlaying={isPlaying}
                    />
                </div>
            </div>
        );
    }
}
export default AudioPlayer;
