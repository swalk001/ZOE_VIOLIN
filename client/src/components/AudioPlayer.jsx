import React from 'react';
import Controls from './Controls.jsx';
import Songs from './Songs.jsx';
import songList from './Samples.js';

class AudioPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            audio: songList,
            isPlaying: null,
        };
        this.handlePlay = this.handlePlay.bind(this);
        this.handleStop = this.handleStop.bind(this);
    }

    handlePlay(song) {
        this.setState({
            isPlaying: song,
        });
    }

    handleStop() {
        this.setState({
            isPlaying: null,
        });
    }

    render() {
        const { audio, isPlaying } = this.state;
        return (
            <div className="audio-player">
                <Controls isPlaying={isPlaying} handleStop={this.handleStop} />
                <div className="audio-songs">
                    <Songs songList={audio} handlePlay={this.handlePlay} />
                </div>
            </div>
        );
    }
}
export default AudioPlayer;
