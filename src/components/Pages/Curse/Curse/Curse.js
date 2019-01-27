import React from 'react';
import './Curse.css';

const Curse = (props) => {

    const { title, date, text } = props;

    return (
        <div className='curse'>
            <h3>{title}</h3>
            <span>{date}</span>
            <p>{text}</p>
        </div>
    )
}

export default Curse;