import React, { Component } from 'react'
import { Button } from '../Container Components/Button'

interface DevProps{
    title: string;
    Id: string;
}

export class DevShow extends Component <DevProps>{
    render() {
        return (
            <div className="" key={this.props.Id}>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h3> {this.props.title} </h3>
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        {this.props.children[0]}
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        {this.props.children[1]}
                    </div>
                </div>
            </div>
        )
    }
}

export default DevShow
