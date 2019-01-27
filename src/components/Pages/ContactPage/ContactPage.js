import React from 'react';
import Row from '../../row/row';
import Contacts from '../Contacts/Contacts';
import Title from '../Title/Title';
import ScrollArea from 'react-scrollbar';
import VerticalLinearStepper from '../Contacts/VerticalLinearStepper/VerticalLinearStepper';

const ContactPage = () => {
    return (
        <div className="Pages">
        <ScrollArea
            speed={0.5}
            className="area"
            contentClassName="content"
            horizontal={false}
        >
            <Title 
                title={'contacts'} 
                text={"Est rebum lorem sed at consetetur et eirmod. Lorem sed at consetetur et eirmod"}/>
            <Row 
                left={<Contacts />}
                right={<VerticalLinearStepper />}
            />
        </ScrollArea>
        </div>
    )
}

export default ContactPage;