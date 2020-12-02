import React from 'react';

const ParaImage = () => {
    return (
        <div className="para-img">
            <section className="para-img-section">
                <ul className="para-img-ul">
                    <li
                        className="scroll-img"
                        data-rate=".14"
                        data-direction="vertical"
                    >
                        <img
                            className="para-solo"
                            src="../imgs/ZOE_PLAYING.jpg"
                            alt="solo"
                        />
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default ParaImage;
