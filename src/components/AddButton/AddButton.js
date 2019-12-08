import React from 'react';

function AddButton(props) {

    function handleClick() {
        props.isClicked();

    }

    return (
        <div className="AddButton" onClick={() => handleClick()}>
            +
        </div>
    );
}

export default AddButton;