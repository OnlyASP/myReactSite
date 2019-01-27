import React from 'react';
import './About.css';

import Title from '../Title/Title';
import Label from '../Label/Label';
import Technology from '../Techonology/Techonology';
import Row from '../../row/row';
import Curses from '../Curse/Curses';
import Skills from '../Skills/Skills';
import ScrollArea from 'react-scrollbar';

const About = () => {
    return (
            
        <div className='Pages About'>
        <ScrollArea
            speed={0.5}
            className="area"
            contentClassName="content"
            horizontal={false}
        >
            <Title 
                title={'about'} 
                text={"Hi, I'm John Sensitive, invidunt sed labore eirmod ea et, dolor sit sea et est diam lorem sed. Est rebum lorem sed at consetetur et eirmod. I'm good at html, css, wordpress, .net core, jquery, bootstrap, angularjs."}/>
                
            <Label label={'about'}/>

            <Technology />

            <Row 
                left={<Label label={'more'}/>}
                right={<Label label={'hardcore'}/>}
            />

            <Curses />

            <Row 
                left={<Label label={'Personal Skill'}/>}
                right={<Label label={'Coding Skills'}/>}
            />

            <Skills />
        </ScrollArea>
        </div>
    )
}


export default About;