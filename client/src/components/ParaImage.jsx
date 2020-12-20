import React from 'react';

const ParaImage = () => {
    return (
        <section className="section-para-image">
            <div className="para-imgage">
                <ul className="para-img-ul">
                    <li
                        className="scroll"
                        data-rate="-.2"
                        data-direction="vertical"
                    >
                        <img
                            className="para-solo"
                            src="../imgs/ZOE_HAT.jpg"
                            alt="solo"
                        />
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default ParaImage;
