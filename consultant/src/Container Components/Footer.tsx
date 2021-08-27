import React, { Component } from 'react'
import { FooterImg } from '../Container Components/FooterImg'
import { Header } from '../Container Components/Header'

export class Footer extends Component {
    render() {
        return (
            <div className="container footer">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">

                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <FooterImg label="Companies in touch"></FooterImg>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <FooterImg label="Social Media"></FooterImg>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
