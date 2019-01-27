import React from 'react';
import './Title.css';

const Title = (props) => {
    const { title, text } = props;
    return (
        <div className='title'>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    )
}


export default Title;