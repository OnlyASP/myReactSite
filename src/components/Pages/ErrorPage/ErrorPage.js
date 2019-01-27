import React, { Component } from 'react';
import Title from '../Title/Title';
import Label from '../Label/Label';
import './ErrorPage.css';
import ErrorButton from './ErrorComponents/error-button/error-button';
import ErrorElements from './ErrorComponents/error-elements/ErrorElements';
import Row from '../../row/row';
import ScrollArea from 'react-scrollbar';


class ErrorPage extends Component {

    render() {
        return (
            <div className='Pages error-page'>
            <ScrollArea
                speed={0.5}
                className="area"
                contentClassName="content"
                horizontal={false}
            >
                <Title 
                    title={'Error Page'} 
                    text={"Eirmod kasd ea aliquyam rebum"}/>
                <Label label={'Ошибки отдельных компонентов'}/>
                <Row
                    left={<ErrorElements />}
                    right={<ErrorElements />}
                />
                <Label label={'Ошибка страницы'}/>
                <div className='error-all'>
                    <h2>Нажми что бы убить страницу</h2>
                    <ErrorButton />
                </div>
                
            </ScrollArea>
            </div>
        )
    }
}

export default ErrorPage;