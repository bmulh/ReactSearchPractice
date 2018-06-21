import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){ // first and only function called automatically when a new instance is created
        super(props); 

        this.state = { term: ''}; //initialize object and assign to this.state
    }                             // term is short for search term - starts and '' empty string

    render() {
        return (
            <div>
                <input 
                value={this.state.term}
                onChange={event => this.setState({ term: event.target.value})} />

            </div>
        );
    }
}

export default SearchBar;