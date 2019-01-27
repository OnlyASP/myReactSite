import React, { Component } from 'react';
import Typed from 'react-typed';
import './TypedText.css';

class TypedText extends Component {
   
    render() {
      return (
        <div className='label-typed'>
            <Typed 
                className='title-typed'
                strings={['Here you can']} 
                typeSpeed={40}
                showCursor={false} 
            />
            
            <Typed 
                className='text-typed'
                strings={[
                'Search for products',
                'Search for categories',
                'Search for brands']}
                typeSpeed={50}
                backSpeed={50} 
                loop >
                
            </Typed>
        </div>
      );
    }
}

export default TypedText;
