import React, { Component } from 'react';
import SearchBox from '../components/searchBox';
import CardList from '../components/cardList';
import Scroll from '../components/scroll';
import '../index.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            users: [],
            searchfield: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(user => this.setState({ users: user }));
    }

    onSearch = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const filterdUsers = this.state.users.filter(user => {
            return user.name.toLowerCase()
                .includes(this.state.searchfield.toLowerCase()) ||
                user.username.toLowerCase()
                    .includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div>
                <h1 className="tc white tracked-mega pa1 ma3">THEY DONT EXIST</h1>
                <SearchBox search={this.onSearch} />
                <Scroll>
                <CardList users={filterdUsers} />
                </Scroll>
            </div>
        );
    }

}

export default App;