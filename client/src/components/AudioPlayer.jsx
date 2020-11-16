import React from 'react';

class AudioPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            audio: [],
            playing: null,
        };
    }

    render() {
        return (
            <div className="audio-player">
                <div className="audio-player-title">AUDIO PLAYER</div>
            </div>
        );
    }
}
export default AudioPlayer;
