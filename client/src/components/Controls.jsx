import React from 'react';

const Controls = ({
    isPlaying,
    handlePlay,
    handleStop,
    handleNext,
    handlePrev,
}) => {
    return (
        // <div className="audio2__controls">
        //     <div className="audio2__controls--choice">
        //         <ion-icon
        //             name="play-skip-back-circle-outline"
        //             onClick={() => handlePrev()}
        //         ></ion-icon>
        //     </div>
        //     <div className="audio2__controls--play">
        //         {isPlaying === null ? (
        //             <ion-icon
        //                 name="play-circle-outline"
        //                 onClick={() => handlePlay()}
        //             ></ion-icon>
        //         ) : (
        //             <ion-icon
        //                 name="stop-circle-outline"
        //                 onClick={() => handleStop()}
        //             ></ion-icon>
        //         )}
        //     </div>
        //     <div className="audio2__controls--choice">
        //         <ion-icon
        //             name="play-skip-forward-circle-outline"
        //             onClick={() => handleNext()}
        //         ></ion-icon>
        //     </div>
        // </div>

        <div className="music__control">
            <div className="music__control--prev">
                <ion-icon
                    name="play-skip-back-circle-outline"
                    onClick={() => handlePrev()}
                ></ion-icon>
            </div>
            <div className="music__control--play">
                {isPlaying === null ? (
                    <ion-icon
                        name="play-circle-outline"
                        onClick={() => handlePlay()}
                    ></ion-icon>
                ) : (
                    <ion-icon
                        name="stop-circle-outline"
                        onClick={() => handleStop()}
                    ></ion-icon>
                )}
            </div>
            <div className="music__control--next">
                <ion-icon
                    name="play-skip-forward-circle-outline"
                    onClick={() => handleNext()}
                ></ion-icon>
            </div>
        </div>
    );
};
export default Controls;
