import React, { useState } from 'react';

const Controls = () => {
    const [playing, setPlaying] = useState(false);

    return (
        <div className="audio-controls">
            <div className="audio-choice">
                <ion-icon name="play-back"></ion-icon>
            </div>
            <div className="audio-play">
                {!playing ? (
                    <ion-icon
                        name="play"
                        onClick={() => setPlaying(!playing)}
                    ></ion-icon>
                ) : (
                    <ion-icon
                        name="pause"
                        onClick={() => setPlaying(!playing)}
                    ></ion-icon>
                )}
            </div>
            <div className="audio-choice">
                <ion-icon name="play-forward"></ion-icon>
            </div>
        </div>
    );
};
export default Controls;
