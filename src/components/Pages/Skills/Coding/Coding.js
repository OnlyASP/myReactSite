import React, { Component } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';


class Coding extends Component {

    constructor(props) {
        super(props)

        this.state = {
            html: 80,
            js: 85,
            wordpress: 20,
            python: 30,
        }
    }

    render () {

        const { html, js, wordpress, python } = this.state;

        return (
            <div>
                <div className="progress">
                    <h4>HTML5 / CSS3</h4>
                    <ProgressBar perc={html}/>
                </div>
    
                <div className="progress">
                    <h4>JavaScript / jQuery / AngularJs</h4>
                    <ProgressBar perc={js}/>
                </div>
    
                <div className="progress">
                    <h4>WordPress</h4>
                    <ProgressBar perc={wordpress}/>
                </div>
    
                <div className="progress">
                    <h4>Python</h4>
                    <ProgressBar perc={python}/>
                </div>
            </div>
        )
    }
}

export default Coding;