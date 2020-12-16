import React from 'react';
import { Howl } from 'howler';

const Songs = ({ songList, handlePlay, isPlaying }) => {
    return (
        <div className="audio__songs">
            <ul>
                {songList.map((song) => {
                    return song === isPlaying ? (
                        <li
                            className="active"
                            key={song}
                            onClick={(e) => handlePlay(e.target.innerHTML)}
                        >
                            {song}
                        </li>
                    ) : (
                        <li
                            key={song}
                            onClick={(e) => handlePlay(e.target.innerHTML)}
                        >
                            {song}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Songs;
