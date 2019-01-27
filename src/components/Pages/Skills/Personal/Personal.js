import React, { Component } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';


class Personal extends Component {

    constructor(props) {
        super(props)

        this.state = {
            team: 80,
            commun: 85,
            lang: 90,
            pat: 60,
        }
    }

    render () {

        const { team, commun, lang, pat } = this.state;

        return ( 
            <div>
                <div className="progress">
                    <h4>Teamwork</h4>
                    <ProgressBar perc={team}/>
                </div>
    
                <div className="progress">
                    <h4>Communication</h4>
                    <ProgressBar perc={commun}/>
                </div>
    
                <div className="progress">
                    <h4>Language</h4>
                    <ProgressBar perc={lang}/>
                </div>
    
                <div className="progress">
                    <h4>Patience</h4>
                    <ProgressBar perc={pat}/>
                </div>
            </div>
        )
    }
}

export default Personal;