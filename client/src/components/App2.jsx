import React from 'react';
import axios from 'axios';
import Hero from './Hero.jsx';
// import NavBar from './NavBar.jsx';
// import Contact from './Contact.jsx';
// import SongList from './SongList.jsx';
// import Home from './Home.jsx';
// import Modal from './Modal.jsx';
import Effects from './Effects.js';
import NavBar from './NavBar.jsx';
import Bio from './Bio.jsx';
// import NavModal from './NavModal.jsx';
import '../styles/sass/main.scss';
import AudioPlayer from './AudioPlayer.jsx';
import Gallery from './Gallery.jsx';

class App2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            connect: '',
            modal: false,
            navModal: false,
        };
    }

    componentDidMount() {
        axios.get('/api/connect').then((data) => {
            this.setState({
                connect: data.data,
            });
        });
        Effects.parallax();
        // Object.keys(Effects).forEach((key) => Effects[key]());
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
            () => console.log('nav-modal', this.state.navModal)
        );
    }

    render() {
        const { modal, navModal } = this.state;
        return (
            <div>
                <NavBar displayNavModal={this.displayNavModal.bind(this)} />
                <Hero />
                <Bio />
                <Gallery />
                {/* <AudioPlayer /> */}
            </div>
        );
    }
}

export default App2;
