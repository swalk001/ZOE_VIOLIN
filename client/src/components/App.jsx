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
                <img src="../imgs/ZOE.JPG" alt="Zoe" />
            </div>
        );
    }
}

export default App;
