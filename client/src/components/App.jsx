import React from 'react';
import emailjs from 'emailjs-com';
import { Router } from '@reach/router';
import axios from 'axios';
import NavBar from './NavBar.jsx';
import Contact from './Contact.jsx';
import SongList from './SongList.jsx';
import Home from './Home.jsx';
import Modal from './Modal.jsx';
import Effects from './Effects.js';
import NavModal from './NavModal.jsx';

class App extends React.Component {
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
        Object.keys(Effects).forEach((key) => Effects[key]());
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
            <div className="main-wrapper">
                <Modal
                    modal={modal}
                    displayModal={this.displayModal.bind(this)}
                />
                <NavModal
                    navModal={navModal}
                    displayNavModal={this.displayNavModal.bind(this)}
                />
                <NavBar
                    navModal={navModal}
                    displayNavModal={this.displayNavModal.bind(this)}
                />
                <Router primary={false}>
                    <Home
                        path="/"
                        displayModal={this.displayModal.bind(this)}
                        modal={modal}
                    />
                    <SongList path="song-list" />
                </Router>
            </div>
        );
    }
}

export default App;
