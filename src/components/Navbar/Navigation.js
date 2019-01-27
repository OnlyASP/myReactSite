import React, { Component } from 'react';

import './Navigation.css';
import './Section/Section.css';
import logo from '../../img/p3.png';
import Logo from './Section/Logo';
import ListItemComposition from './Section/ListItemComposition';


class Navigation extends Component {

    render () {

        const { widthLeft, btn, active } = this.props;


        return (   
            <div className='navigation' style={{width: `${widthLeft}px`}}>
                
                <Logo logo={logo} active={active} name={'John John'}/>
                        
                <ListItemComposition active={active}/>

                {btn}

            </div>
        )
    }
}

export default Navigation;