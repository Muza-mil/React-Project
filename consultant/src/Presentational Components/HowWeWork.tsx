import React, { Component } from 'react'
import { DevShow } from '../Container Components/DevShow'

export class HowWeWork extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 p-5 card">
                            <DevShow title="Inquiry" Id="inquiry">
                                <p>
                                    Describe your requirements for your specific project. Subscribe by submitting a request and we will call you in a few moments and get further details.
                                        </p>
                                <div></div>
                            </DevShow>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 p-5 card">
                            <DevShow title="Help find a match" Id="find">
                                <p>
                                    We will help you find suitable can candidates within hours by sending their CVs.
                                        </p>
                                <div></div>
                            </DevShow>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HowWeWork
