import React, { Component } from 'react'
import { ImageList } from './ImageList'
import { Slider } from './Slider'

export class ImageSlider extends Component {
    render() {
        const imgData = [
            {
                id: 1,
                src: "../media/developer.png",
                title: "Front-End Developer",
                classname: "carousel-item active"
            },
            {
                id: 2,
                src: "../media/developer.png",
                title: "Back-End Developer",
                classname: "carousel-item"
            },
            {
                id: 3,
                src: "../media/developer.png",
                title: "Full-Stack Developer",
                classname: "carousel-item"
            },
            {
                id: 4,
                src: "../media/developer.png",
                title: "Web App Developer",
                classname: "carousel-item"
            },
            {
                id: 5,
                src: "../media/developer.png",
                title: "Mobile App Developer",
                classname: "carousel-item"
            }
        ]
        const imgList = imgData.map((arr,i) => {
            return (
                <ImageList class={imgData[i].classname} 
                SRC={imgData[i].src} 
                title={imgData[i].title} 
                imgTitle={imgData[i].title} 
                key={i} ></ImageList>
            )
        })
        return (
            <Slider>
                {imgList}
            </Slider>
        )
    }
}

export default ImageSlider
