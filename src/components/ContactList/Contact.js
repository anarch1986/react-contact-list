import React from 'react';

function Contact(props) {

    function handleClick(contactData) {
        props.getContactData(contactData);
    }


    return (
        <div className="col-md-4 col-sm-12">
            <div className="Contact clickable" onClick={() => handleClick(props.contactData)}>
                <div className="Name text-center word-container">{props.contactData.name}</div>
                <div className="Email text-center word-container">{props.contactData.email}</div>
                <div className="Phone text-center word-container">{props.contactData.phone}</div>
            </div>
        </div>);
}

export default Contact;