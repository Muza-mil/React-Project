import React, { Component } from 'react'

interface IBanner{
    title: string;
    firstTXT: string;
    secondTXT: string;
}

export class Banner extends Component <IBanner> {
    render() {
        return (
            <div className="container Banner">
                <div className="row banner-title">
                    <div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center">
                        <h1> {this.props.title} </h1>
                    </div>
                </div>
                <div className="row">
                    {this.props.children[0]}
                </div>
                <div className="row p-5">
                    <div className="col-lg-12 col-md-10 col-sm-10">
                        <div className="row">
                            <div className="col-lg-12 col-md-10 col-sm-10">
                                <h3> {this.props.firstTXT} </h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-10 col-md-10 col-sm-10">
                                <h3> {this.props.secondTXT} </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-12 mt-4 ml-2 d-flex justify-content-center">
                        {this.props.children[1]}
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mt-4 d-flex justify-content-center">
                        {this.props.children[2]}
                    </div>
                </div>
            </div>
        )
    }
}

export default Banner
