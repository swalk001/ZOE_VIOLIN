import React from 'react';
import emailjs from 'emailjs-com';
import { Router } from '@reach/router';
import axios from 'axios';
import NavBar from './NavBar.jsx';
import Contact from './Contact.jsx';
import Bio from './Bio.jsx';
import SongList from './SongList.jsx';
import Home from './Home.jsx';
import Modal from './Modal.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            connect: '',
            modal: false,
        };
    }

    componentDidMount() {
        axios.get('/api/connect').then((data) => {
            this.setState({
                connect: data.data,
            });
        });
    }

    displayModal() {
        this.setState({
            modal: !this.state.modal,
        });
    }

    render() {
        const { modal } = this.state;
        return (
            <div className="main-wrapper">
                <Modal
                    modal={modal}
                    displayModal={this.displayModal.bind(this)}
                />
                <NavBar />
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
