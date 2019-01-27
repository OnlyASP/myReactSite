import React from 'react';
import './Address.css';
import icon from '../../../../img/location-pin.png';

const Address = () => {
    return (
        <div className='address'>
            <div className='address-group'>
                <img src={icon} alt="city" className='social-icon'/>
                <div className='city'>Los Angeles, USA</div>
            </div>
            <div className='address-group'>
                <img src={icon} alt="mail" className='social-icon'/>
                <div className='mail'><a href='mailto:example@example.com'>example@example.com</a></div>
            </div>
            <div className='address-group'>
                <img src={icon} alt="phone" className='social-icon'/>
                <div className='phone'><a href='tel:001234567890'>+1234567890</a></div>
            </div>
            <div className='address-group'>
                <img src={icon} alt="social" className='social-icon'/>
                <div className='social'>Facebook <span>Available</span></div>
            </div>
        </div>
    )
}

export default Address;