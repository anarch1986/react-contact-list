import React from 'react';

function Letter(props) {

    function handleClick(letter) {
        props.getLetter(letter);
    }

    return (
        <div>
            <div className={`Letter clickable ${props.isChoosen ? "choosenLetter" : ""}`} onClick={() => handleClick(props.letter)}>
                {props.letter}
            </div>
        </div>);
}

export default Letter;