import React, { Component } from 'react'

interface FProps{
    title: string;
}

export class FormButton extends Component <FProps> {
    render() {
        return (
            <div className="form-group">
                <div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary"> {this.props.title} </button>
                </div>
            </div>
        )
    }
}

export default FormButton
