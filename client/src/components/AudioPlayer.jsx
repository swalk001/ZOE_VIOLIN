import React from 'react';
import Controls from './Controls.jsx';
import Songs from './Songs.jsx';

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
                <Controls />
                <div className="audio-songs">
                    <Songs />
                </div>
            </div>
        );
    }
}
export default AudioPlayer;
