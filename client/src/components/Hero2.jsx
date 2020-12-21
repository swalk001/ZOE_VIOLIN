import React from 'react';
import Gallery from './Gallery.jsx';

const Hero2 = ({ autoScroll, instagram, toggleScroll }) => {
    return (
        // <section className="section-hero2">
        //     <div className="hero2">
        //         {/* <div className="row"> */}
        //         <div className="hero2__img-wrapper">
        //             <div className="hero2__package">
        //                 <h2>
        //                     SOLO <br></br>VIOLIN
        //                 </h2>
        //                 <img
        //                     className="hero2__img"
        //                     // data-rate=".7"
        //                     data-direction="vertical"
        //                     src="../imgs/ZOE_STANDING.JPG"
        //                     alt="Zoe"
        //                 />
        //             </div>
        //             <div className="hero2__package">
        //                 <h2>
        //                     DUO<br></br>VIOLIN + GUITAR
        //                 </h2>
        //                 <img
        //                     className="hero2__img"
        //                     // data-rate=".7"
        //                     data-direction="vertical"
        //                     src="../imgs/ZOE_CHRISTIAN.JPG"
        //                     alt="Zoe"
        //                 />
        //             </div>
        //             {/* </div> */}
        //         </div>
        //     </div>
        //     <span
        //         className="hero2__img-box scroll"
        //         data-rate=".46"
        //         data-direction="vertical"
        //         alt="Zoe"
        //     />
        // </section>
        <div className="wrapper">
            <section className="section parallax bg1">
                {/* <h1>Catered Music for Weddings & Events</h1> */}
            </section>
            <section className="section static">
                <h1>Catered Music for Weddings & Events</h1>
            </section>
            <section className="section parallax bg2"></section>
            <span
                className="hero2__img-box scroll"
                data-rate=".46"
                data-direction="vertical"
                alt="Zoe"
            />
        </div>
    );
};

export default Hero2;
