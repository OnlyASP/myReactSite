import React from 'react';
import './Section.css';

const Section = (props) => {
    const {icon, name, active, target, onClick, key} = props;
    return (
        <div className={'nav-cell ' + target} onClick={onClick} key={key}>
            <img src={icon} alt="icon" className='img-icon'/>
            <h5 className={'' + active}>{name}</h5>
        </div>
    )
}

export default Section;