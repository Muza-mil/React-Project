import React, { Component } from 'react'

interface LProps{
    title: string;
}
export class FormLabel extends Component <LProps>{
    render() {
        return (
            <div className="form-group">
                <h3 className="col-lg-12 col-md-12 col-sm-12"> {this.props.title} </h3>
            </div>
        )
    }
}

export default FormLabel
