import React, { useState } from 'react';

const Controls = ({ isPlaying, handlePlay, handleStop }) => {
    // const [playing, setPlaying] = useState(false);

    return (
        <div className="audio-controls">
            <div className="audio-choice">
                <ion-icon name="play-back-sharp"></ion-icon>
            </div>
            <div className="audio-play">
                {isPlaying === null ? (
                    <ion-icon
                        name="play-circle-sharp"
                        onClick={() => handlePlay()}
                    ></ion-icon>
                ) : (
                    <ion-icon
                        name="stop-circle-sharp"
                        onClick={() => handleStop()}
                    ></ion-icon>
                )}
            </div>
            <div className="audio-choice">
                <ion-icon name="play-forward-sharp"></ion-icon>
            </div>
        </div>
    );
};
export default Controls;
