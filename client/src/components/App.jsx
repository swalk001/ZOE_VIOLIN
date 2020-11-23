import React from 'react';
import emailjs from 'emailjs-com';
import axios from 'axios';
import NavBar from './NavBar.jsx';
import AudioPlayer from './AudioPlayer.jsx';
import VideoPlayer from './VideoPlayer.jsx';
import Contact from './Contact.jsx';
import Description from './Description.jsx';
import Links from './Links.jsx';
import Bio from './Bio.jsx';
import Hero from './Hero.jsx';
import SongList from './SongList.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            connect: '',
            page: 0,
        };
    }

    componentDidMount() {
        axios.get('/api/connect').then((data) => {
            this.setState({
                connect: data.data,
            });
        });
    }

    // submitForm(data) {
    //     emailjs.send(
    //         'service_sa9q7rt',
    //         'template_m2vq3hs',
    //         data,
    //         'user_vIfKhr4fTD9JBr7RmsfXN'
    //     );
    // }

    pageSelect(page) {
        this.setState({
            page,
        });
    }

    render() {
        // const { connection } = this.state;
        const { page } = this.state;
        if (page === 1) {
            return (
                <div className="main-wrapper">
                    <NavBar pageSelect={this.pageSelect.bind(this)} />
                    <section className="contact">
                        <Contact />
                    </section>
                </div>
            );
        } else if (page === 2) {
            return (
                <div className="main-wrapper">
                    <NavBar pageSelect={this.pageSelect.bind(this)} />
                    <Bio />
                </div>
            );
        } else if (page === 3) {
            return (
                <div className="main-wrapper">
                    <NavBar pageSelect={this.pageSelect.bind(this)} />
                    <SongList />
                </div>
            );
        }
        return (
            <div className="main-wrapper">
                <NavBar pageSelect={this.pageSelect.bind(this)} />
                <Hero />
                <Description />
                <div id="audio-player" />
                <AudioPlayer />
                <div id="video-player" />
                <VideoPlayer />
                <Links />
            </div>
        );
    }
}

export default App;
