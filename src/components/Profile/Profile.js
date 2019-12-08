import React from 'react';
import FadeIn from 'react-fade-in'

function Profile(props) {

    function handleBackClick() {
        props.forwardBackClick();
    }

    function handleDeleteClick(id) {
        props.forwardDeleteClick(id);
    }

    function handleEditClick(id) {
        props.forwardEditClick(id);
    }

    return (
        <FadeIn>
            <div className="Profile row justify-content-md-center">
                <div >
                    <div className="profileData">
                        <div className="label">Name:</div>
                        <div className="data name">{props.profileData.name}</div>
                    </div>
                    <div className="profileData">
                        <div className="label">Email:</div>
                        <div className="data red">{props.profileData.email}</div>
                    </div>
                    <div className="profileData">
                        <div className="label">Phone:</div>
                        <div className="data red">{props.profileData.phone}</div>
                    </div>
                </div>
                <div className="col-12 buttonContainer">
                    <button className="controlButton btn btn-outline-danger" onClick={() => handleDeleteClick(props.profileData.id)} >Delete</button>
                    <button className="controlButton btn btn-outline-secondary" onClick={() => handleEditClick(props.profileData.id)}>Edit</button>
                    <button className="controlButton btn btn-outline-secondary" onClick={handleBackClick}>Back</button>
                </div>
            </div>
        </FadeIn>
    );
}


export default Profile;