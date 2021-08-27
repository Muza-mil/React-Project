import React, { Component } from 'react'

interface BtnProps{
    title: string;
}

export class Button extends Component <BtnProps> {
    render() {
        return (
            <input className="btn btn-primary" type="button" value={this.props.title}/>
        )
    }
}

export default Button
