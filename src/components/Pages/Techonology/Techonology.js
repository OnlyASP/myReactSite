import React from 'react';
import Techno from './Techno/Techno';
import Icon from '../../../img/iconfinder_react_js_1322468.png';
import './Technology.css';

const Technology = () => {
    return (
        <div className='grid-col'>
                <Techno
                    icon={Icon}
                    title={'HTML / HTML5'} 
                    text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/> 
                <Techno 
                    icon={Icon}
                    title={'CSS / CSS3'} 
                    text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/> 
                <Techno
                    icon={Icon}
                    title={'Bootstrap 4'} 
                    text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                <Techno
                    icon={Icon} 
                    title={'SaSS/ ScSS'} 
                    text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/> 
                <Techno
                    icon={Icon} 
                    title={'JavaScript'} 
                    text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                <Techno
                    icon={Icon}
                    title={'jQuery'} 
                    text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/> 
                <Techno
                    icon={Icon} 
                    title={'React JS'} 
                    text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/> 
                <Techno
                    icon={Icon} 
                    title={'React Route'} 
                    text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/> 
                <Techno
                    icon={Icon} 
                    title={'Webpack'} 
                    text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/> 
            </div>
    )
}


export default Technology;