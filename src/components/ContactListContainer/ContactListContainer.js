import React, { Component } from 'react';
import ContactList from '../ContactList/ContactList';
import LetterList from '../LetterList/LetterList';
import AddButton from '../AddButton/AddButton';

class ContactListContanier extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contacts: this.props.contacts,
            letters: this.props.contacts.map(function (contact) {
                return contact.name.substring(0, 1);
            }).filter(function (value, index, self) {
                return self.indexOf(value) === index;
            }).sort(),
            filteredContacts: this.props.contacts
        };
        // Getting the refrence of the child components for easier updating
        this.letterList = React.createRef();
    }

    getFilteredContacts(filterString) {
        let filteredContacts = []
        if (filterString.length > 0) {
            // filtering the contact list with the recieved string
            filteredContacts = this.state.contacts.filter(function (contact) {
                return contact.name.toUpperCase().substring(0, filterString.length) === filterString.toUpperCase();
            })
        } else {
            filteredContacts = this.state.contacts;
        }

        this.setState({
            contacts: this.state.contacts,
            letters: this.state.letters,
            filteredContacts: filteredContacts 
        })
    }

    getAllContacts() {
        this.setState({
            contacts: this.state.contacts,
            letters: this.state.letters,
            filteredContacts: this.state.contacts 
        })
        this.letterList.current.setupLetters();
    }

    forwardContactData(contactData) {
        this.props.returnContactData(contactData);
    }

    forwardNewContact() {
        this.props.forwardNewContact();
    }

    render() {
        return (
            <div>
                <LetterList ref={this.letterList} listOfLetters={this.state.letters} forwardLetter={this.getFilteredContacts.bind(this)} />
                <div>
                    <ContactList listOfContacts={this.state.filteredContacts}
                        forwardContactData={this.forwardContactData.bind(this)} />
                </div>
                <AddButton isClicked={this.forwardNewContact.bind(this)} />
            </div>
        );
    }
}

export default ContactListContanier;
