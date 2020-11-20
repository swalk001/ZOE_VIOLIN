import React from 'react';
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
            connection: '',
            page: 0,
        };
    }

    componentDidMount() {
        axios.get('/api/connection').then((data) => {
            this.setState({
                connection: data.data,
            });
        });
    }

    submitForm(form) {
        console.log(form);
    }

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
                        <Contact submitForm={this.submitForm} />
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
