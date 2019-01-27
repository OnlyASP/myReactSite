import React, { Component } from 'react';

import './error-button.css';

export default class ErrorButton extends Component {

  state = {
    renderError: false
  };

  render() {
    if (this.state.renderError) {
      this.foo.bar = 0;
    }

    return (
      <button
        className="error-button"
        onClick={() => this.setState({renderError: true})}>
        Вызов ошибки
      </button>
    );
  }
}
