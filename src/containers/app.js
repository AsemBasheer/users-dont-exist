import React, { Component } from 'react';
import SearchBox from '../components/searchBox';
import CardList from '../components/cardList';
import Scroll from '../components/scroll';
import '../index.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            devices: [],
            searchfield: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(user => this.setState({ devices: user }));
    }

    onSearch = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const filterdDevices = this.state.devices.filter(devices => {
            return devices.name.toLowerCase()
                .includes(this.state.searchfield.toLowerCase()) ||
                devices.username.toLowerCase()
                    .includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div>
                <h1 className="tc white tracked-mega pa1 ma3">THEY DONT EXIST</h1>
                <SearchBox search={this.onSearch} />
                <Scroll>
                <CardList devices={filterdDevices} />
                </Scroll>
            </div>
        );
    }

}

export default App;