import React from 'react';

const ParaHero = () => {
    return (
        // <div class="parallax-section">
        //     <div class="parallax-child-section">
        //         <section class="fw-main-row" id="frontlashID"></section>
        //     </div>
        // </div>
        <div className="para-wrapper">
            <section className="section parallax bg1">
                <h1>Cute Kitten</h1>
            </section>
            <section className="section static">
                <h1>Boring</h1>
            </section>
            {/* <section className="section parallax bg2">
                <h1>Fluffy Kitten</h1>
            </section> */}
        </div>
    );
};

export default ParaHero;
