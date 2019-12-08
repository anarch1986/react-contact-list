import React from 'react';
import Validated from './Validated'
import FadeIn from 'react-fade-in'

class NewProfile extends Validated {

    constructor(props) {
        super(props);
        this.state = {
            contactData: {
                name: "",
                email: "",
                phone: ""
            },

        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleBackClick = this.handleBackClick.bind(this);
    }

    handleBackClick() {
        this.props.forwardBackClick();
    }

    render() {
        return (
            <FadeIn>
                <div className="container">
                <form>
                    <div className="col-12 form-group justify-content-center">
                        <label>Name:</label>
                        <div className="col-12">
                            <input type="text" className="form-control" placeholder="Enter Name"
                                value={this.state.contactData.name} onChange={this.handleNameChange} />
                            {this.state.nameError &&
                                <span className="error">Name is required</span>
                            }
                        </div>
                    </div>
                    <div className="col-12 form-group justify-content-center">
                        <label>Email:</label>
                        <div className="col-12">
                            <input type="email" className="form-control" placeholder="Enter Email"
                                value={this.state.contactData.email} onChange={this.handleEmailChange} />
                            {this.state.emailError &&
                                <span className="error">invalid email address</span>
                            }
                        </div>
                    </div>
                    <div className="col-12 form-group justify-content-center">
                        <label>Phone:</label>
                        <div className="col-12">
                            <input type="tel" className="form-control" placeholder="Enter Phone"
                                value={this.state.contactData.phone} onChange={this.handlePhoneChange} />
                            {this.state.phoneError &&
                                <span className="error">Phone number is required</span>
                            }
                        </div>
                    </div>
                    <div className="form-group justify-content-md-center">
                        <div className="buttonContainer">
                            <button type="button"
                                className="profileButton btn btn-outline-secondary"
                                onClick={() => this.handleSave()}>
                                Save Contact
                            </button>
                            <button type="button"
                                className="profileButton btn btn-outline-secondary"
                                onClick={() => this.handleBackClick()}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>
                </div>
            </FadeIn>);
    }
}

export default NewProfile;