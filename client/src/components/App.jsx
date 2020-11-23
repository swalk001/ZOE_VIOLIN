import React from 'react';
import emailjs from 'emailjs-com';
import { Router } from '@reach/router';
import axios from 'axios';
import NavBar from './NavBar.jsx';
import Contact from './Contact.jsx';
import Bio from './Bio.jsx';
import SongList from './SongList.jsx';
import Home from './Home.jsx';

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

    render() {
        return (
            <div className="main-wrapper">
                <NavBar />
                <Router primary={false}>
                    <Home path="/" />
                    <Bio path="bio" />
                    <Contact path="contact" />
                    <SongList path="song-list" />
                </Router>
            </div>
        );
    }
}

export default App;
