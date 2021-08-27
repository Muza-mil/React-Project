import React, { Component } from 'react'


interface FProps{
    label: string;
}
export class FooterImg extends Component <FProps> {
    render() {
        return (
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <label> {this.props.label} </label>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <a>
                            <img src={require('../media/logo.svg')} height="30" alt="No Image"/>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <a>
                            <img src={require('../media/logo.svg')} height="30" alt="No Image"/>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <a>
                            <img src={require('../media/logo.svg')} height="30" alt="No Image"/>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <a>
                            <img src={require('../media/logo.svg')} height="30" alt="No Image"/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default FooterImg
