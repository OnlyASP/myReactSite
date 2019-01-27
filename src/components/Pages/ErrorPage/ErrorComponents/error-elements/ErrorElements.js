import React from 'react';
import './ErrorElements.css';
import ErrorButton from '../error-button/error-button';
import ErrorBoundry from '../error-boundry/error-boundry';

const ErrorElements = () => {
    return (
        <ErrorBoundry>
            <div className='error-elements'>
                <h3>Hello! How are you?</h3>
                <p>Эта кнопка убьет только этот эллемент</p>
                <ErrorButton />
            </div>
        </ErrorBoundry>
        
    )
}

export default ErrorElements;