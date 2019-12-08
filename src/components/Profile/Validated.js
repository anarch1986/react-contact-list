import { Component } from 'react';

class Validated extends Component {

    handleNameChange(event) {
        let contactData = this.state.contactData;
        contactData.name = event.target.value
        this.setState({ contactData: contactData });
    }

    handleEmailChange(event) {
        let contactData = this.state.contactData;
        contactData.email = event.target.value
        this.setState({ contactData: contactData });
    }

    handlePhoneChange(event) {
        let contactData = this.state.contactData;
        contactData.phone = event.target.value
        this.setState({ contactData: contactData });
    }

    handleSave() {
        let newState = { ...this.state };
        if (newState.contactData.name.length <= 0) {
            newState.nameError = true;

        } else {
            newState.nameError = false;
        }

        if (!this.validateEmail(newState.contactData.email)) {
            newState.emailError = true;
        } else {
            newState.emailError = false;
        }

        if (newState.contactData.phone.length <= 0) {
            newState.phoneError = true;
        } else {
            newState.phoneError = false;
        }

        if (this.checkForErrors(newState)) {
            this.props.getContact(this.state.contactData);
        } else {
            this.setState(newState);
        }

    }

    checkForErrors(state) {
        if (!state.nameError && !state.emailError && !state.phoneError) {
            return true;
        } else {
            return false;
        }
    }

    validateEmail(email) {
        const regex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    }

}

export default Validated;
