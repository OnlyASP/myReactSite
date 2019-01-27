import React from 'react';

const Logo = (props) => {
    const {logo, name, active} = props;
    return (
        <div className='logo nav-cell'>
            <img src={logo} alt="logo" className='img-logo'/>
            <h4 className={'logo-name ' + active}>{name}</h4>
        </div>
    )
}

export default Logo;