import React from 'react'

const Card = (props) => {
    return (
        <div className = "card" onClick = {props.onClick}>
            <h3>{props.content}</h3>
        </div>
    );
}

export default Card;