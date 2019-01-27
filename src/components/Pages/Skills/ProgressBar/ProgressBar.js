import React from 'react';
import './ProgressBar.css';

const ProgressBar = (props) => {

    const { perc } = props;

    return (
        <div className='progress-bar'>
            <div className='filler' style={{width: `${perc}%`}} />
        </div>
    )
}

export default ProgressBar;