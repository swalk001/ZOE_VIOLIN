import React from 'react';
import axios from 'axios';
import NavBar from './NavBar.jsx';

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
            <div>
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
            </div>
        );
    }
}

export default App;
