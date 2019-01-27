import React from 'react';

const Techno= (props) => {
    const { title, text, icon } = props;
    return (
        <div className='technology'>
            <img src={icon} alt="icon" className='img-tech'/>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}


export default Techno;