
import React from 'react';
const Info =(props) => {
    return(
        <div className="text-container">
        <h2>Create your character!</h2>
        <p>With this simple website create your next roleplaying character for the upcoming game or D&D session.</p>
        <button className="btn btn-primary" onClick={props.onClose}>Continue</button>
        </div>
    )
}

export default Info;