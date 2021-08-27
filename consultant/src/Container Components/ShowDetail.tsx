import React, { Component } from 'react'
import { Button } from '../Container Components/Button'

interface DetailsProps{
    title: string;
    side: "right" | "left";
}
export class ShowDetail extends Component<DetailsProps> {
    render() {
        if(this.props.side == "right"){
            return (
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 p-5">
                        <div className="row pt-2 pl-4">
                            <h3> {this.props.title} </h3>
                        </div>
                        <div className="row pt-4 pb-3 pl-4">
                            {this.props.children[0]}
                        </div>
                        <div className="row d-flex justify-content-center">
                            {this.props.children[1]}
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-12"></div>
                    <div className="col-lg-6 col-md-6 col-sm-12 img1">
                        {/* {this.props.children[2]} */}
                    </div>
                </div>
            )
        }else if(this.props.side == "left"){
            return (
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 img2">
                        {/* {this.props.children[2]} */}
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 p-5">
                        <div className="row pt-2 pl-5">
                            <h3> {this.props.title} </h3>
                        </div>
                        <div className="row pt-4 pb-3 pl-5">
                            {this.props.children[0]}
                        </div>
                        <div className="row d-flex justify-content-center">
                            {this.props.children[1]}
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-12"></div>
                </div>
            )
        }
    }
}

export default ShowDetail
