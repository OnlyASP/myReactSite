import React, { Component } from 'react';
import Title from '../Title/Title';
import Label from '../Label/Label';
import './Gallery.css';
import RecipeReviewCard from './RecipeReviewCard/RecipeReviewCard';
import ScrollArea from 'react-scrollbar';
import imgBiscuit from '../../../img/coc.jpg';
import imgShamp from '../../../img/shamp.jpg';
import imgApple from '../../../img/apple.jpg';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import gal1 from '../../../img/blueSmoke.jpg';
import gal2 from '../../../img/blueTable.jpg';
import gal3 from '../../../img/glass.jpg';

class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            start: 1,
            finish: 1,
        }
    }

    leftImg = () => {
        console.log('left')
    }

    rightImg = () => {
        console.log('right')
    }


    render() {

        const {start, finish} = this.state;

        // const images = [
        //     {
        //       original: 'http://lorempixel.com/1000/600/nature/1/',
        //       thumbnail: 'http://lorempixel.com/250/150/nature/1/',
        //     },
        //     {
        //       original: 'http://lorempixel.com/1000/600/nature/2/',
        //       thumbnail: 'http://lorempixel.com/250/150/nature/2/'
        //     },
        //     {
        //       original: 'http://lorempixel.com/1000/600/nature/3/',
        //       thumbnail: 'http://lorempixel.com/250/150/nature/3/'
        //     }
        // ]

        const images = [
            {
              original: `${gal1}`,
              thumbnail: `${gal1}`,
            },
            {
              original: `${gal2}`,
              thumbnail: `${gal2}`,
            },
            {
              original: `${gal3}`,
              thumbnail: `${gal3}`,
            }
        ]

        return (
            <div className='Pages Gallery'>
            <ScrollArea
                speed={0.5}
                className="area"
                contentClassName="content"
                horizontal={false}
            >
                <Title 
                    title={'Gallery'} 
                    text={"Eirmod kasd ea aliquyam rebum ipsum amet lorem est, nonumy no magna aliquyam et. No stet ipsum vero sed elitr."}/>
                <Label label={'Cards'}/>
                <div className='grid'>
                    <RecipeReviewCard img={imgBiscuit}/>
                    <RecipeReviewCard img={imgShamp}/>
                    <RecipeReviewCard img={imgApple}/>
                </div>
                <Label label={'Photo'}/>
                {/* <div className='gallery'>
                    <Modal img={img} icon={icon} start={start} finish={finish} leftImg={this.leftImg} rightImg={this.rightImg}/>
                    <Modal img={img2} icon={icon}/>
                    <Modal img={img2} icon={icon}/>
                    <Modal img={img} icon={icon}/>
                    <Modal img={img2} icon={icon}/>
                    <Modal img={img2} icon={icon}/>
                    <Modal img={img2} icon={icon}/>
                    <Modal img={img} icon={icon}/>
                </div> */}
                <div className='margin'>
                    <ImageGallery items={images} autoPlay={false}/>
                </div>
                
            </ScrollArea>
            
            </div>
        )
    }
}

export default Gallery;