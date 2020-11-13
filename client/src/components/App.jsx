import React from 'react';
import axios from 'axios';

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
        const { connection } = this.state;
        return (
            <div>
                <h1>Need a teacher</h1>
                <h2>{connection}</h2>
            </div>
        );
    }
}

export default App;
