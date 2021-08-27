import React, { Component } from 'react'

export class Slider extends Component {
    render() {
        return (
            <div id="demo" className="col-lg-12 col-md-12 col-sm-12 carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Slider
