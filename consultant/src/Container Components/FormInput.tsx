import React, { Component } from 'react'

interface InProps{
    Id: string;
    valueInside: string;
    type: "text" | "email" | "file" | "dropbox" | "textarea"
}
export class FormInput extends Component <InProps> {
    render() {
        if(this.props.type == "text" || this.props.type == "email"){
            return (
                <div className="form-group" key={this.props.Id}>
                    <input type={this.props.type} className="form-control"  placeholder={this.props.valueInside}/>
                </div>
            )
        }else if (this.props.type == "dropbox"){
            return(
                <div className="form-group" key={this.props.Id}>
                    {this.props.children}
                </div>
            )
        }else if(this.props.type == "file"){
            return(
                <div className="form-group" key={this.props.Id}>
                    <input type={this.props.type} className="form-control-file" />
                </div>
            )
        }else if(this.props.type == "textarea"){
            return(
                <div className="form-group" key={this.props.Id}>
                    <textarea className="form-control" rows={5} ></textarea>
                </div>
            )
        }
        
    }
}

export default FormInput
