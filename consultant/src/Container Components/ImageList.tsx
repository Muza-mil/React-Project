import React, { Component } from 'react'

interface imageProps{
    class : string;
    SRC: string;
    title: string;
    imgTitle: string;
}

export class ImageList extends Component<imageProps> {
    render() {
        return (
            <div className={this.props.class}>
                <img src={this.props.SRC} alt={this.props.title} />
                <div className="carousel-caption">
                    <h3> {this.props.imgTitle} </h3>
                </div>   
            </div>
        )
    }
}

export default ImageList
