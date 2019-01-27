import React from 'react';

import './error-indicator.css';
import icon from './false.png';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon"/>
      <span className="boom">ОПС!</span>
      <span>
        Что-то пошло не так
      </span>
    </div>
  );
};

export default ErrorIndicator;
