import React, { Component } from 'react'

interface IContact{
    label: string;
}
export class Contact extends Component <IContact> {
    render() {
        return (
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <label>{this.props.label} </label>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        {this.props.children}
                    </div>
                </div>
        )
    }
}

export default Contact
