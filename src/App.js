import React, { Component } from 'react';
import ContactListContainer from './components/ContactListContainer/ContactListContainer';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import EditProfile from './components/Profile/EditProfile';
import NewProfile from './components/Profile/NewProfile';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      renderContactlist: true,
      renderProfile: false,
      renderEditProfile: false,
      renderNewProfile: false
    };
    // mounting the contacts.json
    this.contacts = require('./assets/contacts.json');
    // Getting the refrence of the ContactListContainer component for easier updating
    this.contactListContainer = React.createRef();
  }

  getAllContacts() {
    this.setState({
      renderContactlist: true,
      renderProfile: false,
      renderEditProfile: false,
      renderNewProfile: false
    });
    this.contactListContainer.current.getAllContacts();
  }

  renderContacts() {
    this.setState({
      renderContactlist: true,
      renderProfile: false,
      renderEditProfile: false,
      renderNewProfile: false
    });
  }

  getFilteredContacts(filterString) {
    this.contactListContainer.current.getFilteredContacts(filterString);
  }

  renderProfile(contactData) {
    this.setState({
      renderContactlist: false,
      renderProfile: true,
      renderEditProfile: false,
      renderNewProfile: false,
      contactData: contactData
    })
  }

  deleteContact(id) {
    this.contacts = this.contacts.filter(function (contact) {
      return contact.id !== id;
    });
    this.setState({
      renderContactlist: true,
      renderProfile: false,
      renderEditProfile: false,
      renderNewProfile: false
    })

  }

  editContact(id) {
    let contact = this.contacts.find(function (contact) {
      return contact.id === id;
    });
    this.setState({
      renderContactlist: false,
      renderProfile: false,
      renderEditProfile: true,
      renderNewProfile: false,
      contactData: contact
    })

  }

  newContact() {
    this.setState({
      renderContactlist: false,
      renderProfile: false,
      renderEditProfile: false,
      renderNewProfile: true
    })
  }

  handleEditContact(contactData) {
    let contact = this.contacts.find(function (contact) {
      return contact.id === contactData.id;
    });

    if (contact != null) {
      contact.name = contactData.name;
      contact.email = contactData.email;
      contact.phone = contactData.phone;
    }

    this.setState({
      renderContactlist: true,
      renderProfile: false,
      renderEditProfile: false,
      renderNewProfile: false
    })
  }

  handleNewContact(contactData) {
    let lastId = Math.max.apply(Math, this.contacts.map(function (contact) { return contact.id; }));
    console.log(lastId);

    this.contacts.push(
      {
        id: lastId + 1,
        name: contactData.name,
        email: contactData.email,
        phone: contactData.phone
      }
    )

    this.setState({
      renderContactlist: true,
      renderProfile: false,
      renderEditProfile: false,
      renderNewProfile: false
    })
  }

  render() {
    let showInput;
    let clickable;
    let renderedComponent;
    let titleText;
    // conditinaly rendering the right component
    if (this.state.renderContactlist) {
      renderedComponent = <ContactListContainer contacts={this.contacts}
        ref={this.contactListContainer} returnContactData={this.renderProfile.bind(this)} forwardNewContact={this.newContact.bind(this)} />;
      titleText = "Contacts"
      clickable = true;
      showInput = true;

    } else if (this.state.renderProfile) {
      titleText = this.state.contactData.name + "'s Profile"
      clickable = false;
      showInput = false;
      renderedComponent = <Profile profileData={this.state.contactData}
        forwardBackClick={this.renderContacts.bind(this)}
        forwardDeleteClick={this.deleteContact.bind(this)}
        forwardEditClick={this.editContact.bind(this)} />

    } else if (this.state.renderEditProfile) {
      titleText = "Edit " + this.state.contactData.name + "'s Profile"
      clickable = false;
      showInput = false;
      renderedComponent = <EditProfile contactData={this.state.contactData} forwardBackClick={this.renderContacts.bind(this)}
        getContact={this.handleEditContact.bind(this)} />

    } else if (this.state.renderNewProfile) {
      titleText = "Add New Contact"
      clickable = false;
      showInput = false;
      renderedComponent = <NewProfile
        forwardBackClick={this.renderContacts.bind(this)} getContact={this.handleNewContact.bind(this)} />
    }

    return (
      <div>
        <Header
          forwardTitleClicked={this.getAllContacts.bind(this)}
          forwardInput={this.getFilteredContacts.bind(this)}
          titleText={titleText}
          clickable={clickable}
          showInput={showInput} />
        {renderedComponent}
      </div>
    );
  }
}

export default App;