import React from 'react';
import Address from './Address/Address';
import SubmitContact from './SubmitContact/SubmitContact';
import Label from '../Label/Label';

const Contacts = () => {
    return (
        <div>
            <Label label={'Get in Touch'}/>
            <Address />

            <Label label={'Contact Form'}/>
            <SubmitContact />
        </div>
    )
}

export default Contacts;