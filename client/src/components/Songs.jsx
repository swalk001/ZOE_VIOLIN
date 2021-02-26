import React from 'react';
import { Howl } from 'howler';
import samples from '../js/Samples.js';

const Songs = ({ handlePlay, isPlaying }) => {
    return (
        // <div className="audio2__songs">
        //     <ul>
        //         {songList.map((song, i) => {
        //             return song === isPlaying ? (
        //                 <li
        //                     className="audio2__songs--active"
        //                     key={song}
        //                     onClick={(e) => handlePlay(e.target.innerHTML)}
        //                 >
        //                     {song}
        //                 </li>
        //             ) : (
        //                 <li
        //                     key={song}
        //                     onClick={(e) => handlePlay(e.target.innerHTML)}
        //                 >
        //                     {song}
        //                 </li>
        //             );
        //         })}
        //     </ul>
        // </div>
        <div className="music__songs">
            <ul className="music__songs-ul">
                {samples.map((song, i) => {
                    return song === isPlaying ? (
                        <li
                            className=" music__songs-item music__songs-item--active"
                            key={song}
                            onClick={(e) => handlePlay(e.target.innerHTML)}
                        >
                            {song}
                        </li>
                    ) : (
                        <li
                            className="music__songs-item"
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
