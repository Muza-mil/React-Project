import React, { Component } from 'react'

export class FormNote extends Component {
    render() {
        return (
            <div className="form-group p-3" id="lgNote">
                {this.props.children[0]}
                {this.props.children[1]}    
            </div>
        )
    }
}

export default FormNote
