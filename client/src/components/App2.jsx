import React from 'react';
import axios from 'axios';
import Hero from './Hero.jsx';
import Hero2 from './Hero2.jsx';
// import NavBar from './NavBar.jsx';
import Contact from './Contact.jsx';
import SongList from './SongList.jsx';
// import Home from './Home.jsx';
import Modal from './Modal.jsx';
import Effects from './Effects.js';
import NavBar from './NavBar.jsx';
import Bio from './Bio.jsx';
// import NavModal from './NavModal.jsx';
import '../styles/sass/main.scss';
import AudioPlayer from './AudioPlayer.jsx';
import Audio2 from './Audio2.jsx';
import Gallery from './Gallery.jsx';
import VideoPlayer from './VideoPlayer.jsx';
import ParaImage from './ParaImage.jsx';
import Form from './Form.jsx';
import Footer from './Footer.jsx';
import NavModal from './NavModal.jsx';

class App2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            autoScroll: true,
            instagram: [
                {
                    thumbnail: null,
                    url: null,
                },
            ],
            modal: false,
            navModal: false,
        };
    }

    componentDidMount() {
        axios.get('/api/instagram').then((data) => {
            this.setState({
                instagram: data.data,
            });
        });
        // Effects.parallax();
        Effects.parallaxHorizontal();
    }

    displayModal() {
        this.setState(
            {
                modal: !this.state.modal,
            },
            () => console.log(this.state.modal)
        );
    }

    displayNavModal() {
        this.setState(
            {
                navModal: !this.state.navModal,
            },
            () => {
                const target = document.getElementsByClassName('navigation');
                target[0].classList.remove('navigation--close');
                target[0].classList.add('navigation--open');
            }
        );
    }

    hideNavModal() {
        const target = document.getElementsByClassName('navigation');
        target[0].classList.add('navigation--close');
        target[0].classList.remove('navigation--open');

        console.log(target);
        setTimeout(
            () =>
                this.setState({
                    navModal: !this.state.navModal,
                }),
            500
        );
    }

    toggleScroll() {
        this.setState({
            autoScroll: false,
        });
    }

    render() {
        const { modal, navModal, autoScroll, instagram } = this.state;
        return (
            <div>
                <NavBar displayNavModal={this.displayNavModal.bind(this)} />
                <NavModal
                    displayNavModal={this.displayNavModal.bind(this)}
                    hideNavModal={this.hideNavModal.bind(this)}
                    navModal={navModal}
                />
                <Modal
                    modal={modal}
                    displayModal={this.displayModal.bind(this)}
                />
                <Hero2 />
                <Bio />
                <Gallery
                    autoScroll={autoScroll}
                    instagram={instagram}
                    toggleScroll={this.toggleScroll.bind(this)}
                />
                <VideoPlayer />
                <Audio2 />
                <SongList />
                <Form displayModal={this.displayModal.bind(this)} />
                <Footer />
            </div>
        );
    }
}

export default App2;
