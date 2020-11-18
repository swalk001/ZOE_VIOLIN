import React from 'react';
import axios from 'axios';
import NavBar from './NavBar.jsx';
import AudioPlayer from './AudioPlayer.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            connection: '',
        };
    }

    componentDidMount() {
        axios.get('/api/connection').then((data) => {
            this.setState({
                connection: data.data,
            });
        });
    }

    render() {
        // const { connection } = this.state;
        return (
            <div className="main-wrapper">
                <NavBar />
                <img className="zoe-hero" src="../imgs/ZOE.JPG" alt="Zoe" />
                <section className="packages">
                    <img
                        className="packages-solo"
                        src="../imgs/ZOE_PLAYING.jpg"
                        alt="solo"
                    />
                    <img
                        className="packages-duo"
                        src="../imgs/ZOE_CHRISTIAN_PLAYING4.jpg"
                        alt="duo"
                    />
                </section>
                <AudioPlayer />
                <section className="bio">
                    <p id="bio">
                        Zoe has studied the violin for over 20 years. Her
                        education includes a Bachelor of Arts in Violin
                        Performance from the College of Charleston where she
                        studied with Charleston Symphony Concertmaster, Yuriy
                        Bekker. She then furthered her education in Arizona,
                        receiving a Masters of Music in Violin and Pedagogy at
                        Northern Arizona University in 2017. Zoe was awarded a
                        Graduate Assistantship in Musicology & Pedagogy and was
                        recipient of the Gates-Taylor Award by the NAU School of
                        Music. Prior, she was the Assistant Concertmaster for
                        the College of Charleston Orchestra and received the
                        Mary Stewart Allen Award for Violin and Most Outstanding
                        Music Award by College of Charleston School of the Arts.
                        Through studying with renowned Suzuki teacher-trainer,
                        Dr. Louise Scott, she is certified in Suzuki Violin
                        Books 1 through 7. Zoe has been selected as a soloist
                        and chamber musician for the Piccolo Spoleto Festival,
                        Charleston Chamber Music Festival, and the renowned
                        Zodiac Music Festival in Southern France. Currently, she
                        is on String Faculty at Ashley Hall in Charleston, SC
                        where she teaches violin and viola K-12. Zoe performs
                        actively in South Carolina, North Carolina, and Georgia,
                        with several symphonies and groups. Additionally, she is
                        experienced in songwriting, improvisation, and other
                        genres outside of classical music; performing vocals and
                        violin with many groups in Charleston, including her own
                        band, Zoe Child and SUSTO.
                    </p>
                </section>
            </div>
        );
    }
}

export default App;