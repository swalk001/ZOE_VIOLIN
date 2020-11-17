import React, { useState } from 'react';

const Songs = () => {
    const songList = [];
    for (let i = 0; i < 15; i++) {
        songList.push('Song');
    }
    return (
        <div>
            <ul>
                {songList.map((song) => {
                    return <li>{song}</li>;
                })}
            </ul>
        </div>
    );
};

export default Songs;
