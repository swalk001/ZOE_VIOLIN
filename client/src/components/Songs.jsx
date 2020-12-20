import React from 'react';
import { Howl } from 'howler';

const Songs = ({ songList, handlePlay, isPlaying }) => {
    return (
        <div className="audio2__songs">
            <ul>
                {songList.map((song, i) => {
                    const digit = i < 9 ? 0 : 1;
                    return song === isPlaying ? (
                        <li
                            className="audio2__songs--active"
                            key={song}
                            onClick={(e) => handlePlay(e.target.innerHTML)}
                        >
                            {/* <div className="audio__songs--number">{i + 1}</div> */}
                            {song}
                        </li>
                    ) : (
                        <li
                            key={song}
                            onClick={(e) => handlePlay(e.target.innerHTML)}
                        >
                            {/* <div className="audio__songs--number">{i + 1}</div> */}
                            {song}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Songs;
