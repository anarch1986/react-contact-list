import React, { Component } from 'react';
import Letter from './Letter';

class LetterList extends Component {

    constructor(props) {
        super(props);
        this.state = { choosenLetter: "" };
        // Getting the refrence of the ContactList component for easier updating
        this.contactList = React.createRef();
    }

    handleLetter(letter) {
        this.props.forwardLetter(letter);
        this.setState({ choosenLetter: letter })
    };

    setupLetters() {
        this.setState({ choosenLetter: "" })
    };

    render() {
        return (
            <div className="row align-items-center justify-content-center">
                {this.props.listOfLetters.map((letter) => {
                    return <Letter key={letter} letter={letter} getLetter={this.handleLetter.bind(this)} isChoosen={letter === this.state.choosenLetter ? true : false} />
                })}
            </div>
        );
    }
}


export default LetterList;