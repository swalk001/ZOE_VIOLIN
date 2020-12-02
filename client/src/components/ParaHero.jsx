import React from 'react';

const ParaHero = () => {
    return (
        <div className="para-hero">
            <section className="para-section">
                <ul className="para-ul">
                    {/* <li
                        className="scroll"
                        data-rate="-2"
                        data-direction="vertical"
                    >
                        vi
                    </li> */}
                    <li
                        className="scroll"
                        data-rate=".3"
                        data-direction="vertical"
                    >
                        <img
                            className="zoe-para-hero"
                            src="../imgs/ZOE.JPG"
                            alt="Zoe"
                        />
                    </li>
                    {/* <li
                        className="scroll"
                        data-rate="2"
                        data-direction="vertical"
                    ></li> */}
                </ul>
                {/* <span
                    className="scroll"
                    data-ratey="-.1"
                    data-ratex=".2"
                    data-direction="horizontal"
                ></span> */}
            </section>
        </div>
    );
};

export default ParaHero;
