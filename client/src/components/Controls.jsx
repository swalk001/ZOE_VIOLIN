import React, { useState } from 'react';

const Controls = ({
    isPlaying,
    handlePlay,
    handleStop,
    handleNext,
    handlePrev,
}) => {
    return (
        <div className="audio-controls">
            <div className="audio-choice">
                <ion-icon
                    name="play-back-sharp"
                    onClick={() => handlePrev()}
                ></ion-icon>
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
                <ion-icon
                    name="play-forward-sharp"
                    onClick={() => handleNext()}
                ></ion-icon>
            </div>
        </div>
    );
};
export default Controls;
