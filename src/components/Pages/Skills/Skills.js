import React from 'react';
import Row from '../../row/row';
import Personal from './Personal/Personal';
import Coding from './Coding/Coding';


const Skills = () => {
    return (
        <Row 
            left={<Personal />}
            right={<Coding />}
        />
    )
}

export default Skills;