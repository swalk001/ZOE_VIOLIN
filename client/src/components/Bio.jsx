import React from 'react';
import { isScrolledIntoViewFromTop } from '../js/Effects.js';

const Bio = () => {
    const target = document.getElementsByClassName('bio');
    const section = document.getElementsByClassName('section-bio');

    window.addEventListener('scroll', () => {
        if (isScrolledIntoViewFromTop(section[0])) {
            target[0].classList.add('bio--animate');
        } else {
            target[0].classList.remove('bio--animate');
        }
    });

    return (
        <section className="section-bio">
            <div className="row">
                <h2 className="bio__heading col-1-of-2">
                    A little about me...
                </h2>
                <div className="bio" id="bio">
                    <section className="bio__text">
                        <p className="col-1-of-2">
                            Zoe has studied the violin for over 20 years. Her
                            education includes a Bachelor of Arts in Violin
                            Performance from the College of Charleston where she
                            studied with Charleston Symphony Concertmaster,
                            Yuriy Bekker. She then furthered her education in
                            Arizona, receiving a Masters of Music in Violin and
                            Pedagogy at Northern Arizona University in 2017. Zoe
                            was awarded a Graduate Assistantship in Musicology &
                            Pedagogy and was recipient of the Gates-Taylor Award
                            by the NAU School of Music. Prior, she was the
                            Assistant Concertmaster for the College of
                            Charleston Orchestra and received the Mary Stewart
                            Allen Award for Violin and Most Outstanding Music
                            Award by College of Charleston School of the Arts.
                        </p>
                        <p className="col-1-of-2">
                            Through studying with renowned Suzuki
                            teacher-trainer, Dr. Louise Scott, she is certified
                            in Suzuki Violin Books 1 through 7. Zoe has been
                            selected as a soloist and chamber musician for the
                            Piccolo Spoleto Festival, Charleston Chamber Music
                            Festival, and the renowned Zodiac Music Festival in
                            Southern France. Currently, she is on String Faculty
                            at Ashley Hall in Charleston, SC where she teaches
                            violin and viola K-12. Zoe performs actively in
                            South Carolina, North Carolina, and Georgia, with
                            several symphonies and groups. Additionally, she is
                            experienced in songwriting, improvisation, and other
                            genres outside of classical music; performing vocals
                            and violin with many groups in Charleston, including
                            her own band, Zoe Child and SUSTO.
                        </p>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default Bio;
