import React from 'react';
import Contact from './Contact';
import FadeIn from 'react-fade-in';

function ContactList(props) {


    function handleContactData(contactData) {
        props.forwardContactData(contactData)
    };

    return (
        <FadeIn>
            <div className="container">
                <div className="row ContactList">
                    {props.listOfContacts.map((contactElement) => {
                        return <Contact key={contactElement.id} contactData={contactElement} getContactData={handleContactData.bind(this)} />
                    })}
                </div>
            </div>
        </FadeIn>
    );
}

export default ContactList;