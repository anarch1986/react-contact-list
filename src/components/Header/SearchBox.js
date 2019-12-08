import React, { Component } from 'react';

class SearchBox extends Component {

    constructor(props) {
        super(props);
        this.state = { searchString: "" }
    }

    handleInput(event) {
        this.setState({
            searchString: event.target.value
        });
        this.props.getInput(event.target.value);
    }

    clearInput() {
        this.setState({
            searchString: ""
        });
    }

    render() {
        return (
            <div className="col-search-input">
                <input type="text"
                    placeholder="Search for contact"
                    onChange={this.handleInput.bind(this)} value={this.state.searchString} />
            </div>
        );
    }
}

export default SearchBox;