import React, { useState } from 'react';
import { Howl } from 'howler';

const Songs = ({ songList, handlePlay }) => {
    const [play, setPlay] = useState(null);
    const playSong = (audio) => {
        if (play !== null) {
            play.stop();
        }

        const song = new Howl({
            src: `../audio/${audio.target.innerHTML}.mp3`,
        });

        song.play();
        setPlay(song);
        handlePlay(audio.target.innerHTML);
    };
    return (
        <div>
            <ul>
                {songList.map((song) => {
                    return (
                        <li key={song} onClick={(e) => playSong(e)}>
                            {song}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Songs;
