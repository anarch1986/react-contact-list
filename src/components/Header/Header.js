import React, { Component } from 'react';
import logo from '../../assets/vodafone_logo.svg';
import SearchBox from './SearchBox';
import Title from './Title';

class Header extends Component {

    constructor(props) {
        super(props);
        this.handleTitleClicked = this.handleTitleClicked.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.searchBox = React.createRef();
    }



    handleTitleClicked() {
        this.props.forwardTitleClicked();
        this.searchBox.current.clearInput();
    };

    handleInput(inputString) {
        this.setState({
            clearTextArea: false
        });
        this.props.forwardInput(inputString);

    };

    render() {
        let inputPlace = this.props.showInput ? <SearchBox ref={this.searchBox} getInput={this.handleInput} /> : <div></div>

        return (
            <div className="container">
                <div className="row header-row align-items-center justify-content-between">
                    <div className="col">
                        <img id="vodafone-logo" src={logo} width="200" alt="vodafone-logo" />
                    </div>
                    {inputPlace}
                </div>
                <Title forwardClick={this.handleTitleClicked} titleText={this.props.titleText} clickable={this.props.clickable} />
            </div>
        );
    }
}

export default Header;