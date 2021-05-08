import React from 'react';
import axios from 'axios';
import SongList from './SongList.jsx';
import Modal from './Modal.jsx';
import Header from './Header.jsx';
import Bio from './Bio.jsx';
import '../styles/sass/main.scss';
import Form from './Form.jsx';
import Footer from './Footer.jsx';
import Banner from './Banner.jsx';
import Gallery from './Gallery.jsx';
import MusicPlayer from './MusicPlayer.jsx';
import ContactForm from './ContactForm.jsx';
import Packages from './Packages.jsx';
import LazyLoad from 'react-lazyload';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            instagram: [
                {
                    thumbnail: null,
                    url: null,
                },
            ],
            modal: false,
            hideMusic: true,
            updated: null,
        };
    }

    componentDidMount() {
        axios.get('/api/instagram').then((data) => {
            this.setState({
                instagram: data.data.reverse(),
                updated: data.data[0].updated,
            });
        });
    }

    displayModal() {
        this.setState({
            modal: !this.state.modal,
        });
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

    toggleMusic() {
        const { hideMusic } = this.state;
        this.setState({
            hideMusic: !hideMusic,
        });
    }

    render() {
        const { modal, navModal, instagram, hideMusic } = this.state;
        return (
            <div>
                <Header toggleMusic={this.toggleMusic.bind(this)} />
                <Banner />
                <Bio />
                <Gallery instagram={instagram} />
                <MusicPlayer hideMusic={hideMusic} />
                <Packages />
                <ContactForm displayModal={this.displayModal.bind(this)} />
                <Modal
                    modal={modal}
                    displayModal={this.displayModal.bind(this)}
                />
                <Footer />
            </div>
        );
    }
}

export default App;
