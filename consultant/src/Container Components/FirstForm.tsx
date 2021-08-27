import React, { Component } from 'react'

export class FirstForm extends Component {
    render() {
        const formData = [
            {
                id : 1,
                text: 'First Name',
                type: 'text'
            },
            {
                id : 2,
                text: 'Last Name',
                type: 'text'
            },
            {
                id : 3,
                text: 'Email',
                type: 'email'
            },
            {
                id : 4,
                text: 'Phone',
                type: 'text'
            },
            {
                id : 5,
                text: 'Company',
                type: 'text'
            }
        ]
        const formElemnts = formData.map((arr, i) => {
            return (
                <div className="form-group" key={formData[i].id.toString()}>
                    <div className="col-lg-8 col-md-8 col-md-6 col-sm-8">
                        <input type={formData[i].type} className="form-control" placeholder={formData[i].text} id={formData[i].id.toString()}/>
                    </div>
                </div>
            )
        })
        return (
                <form>
                    <div className="form-group d-flex justify-content-center">
                        <h3 className="col-lg-10 col-md-6 col-sm-12 pt-5 text-center" id="formtitle"> Want to talk to us? </h3>
                    </div>
    
                    {formElemnts}    
                    
                    <div className="form-group p-3" id="lgNote">
                        <label> Legal Note : </label>
                        <p>Thank you for your interest in the our website. The issue of data protection and confidentiality is a topic we take very seriously and we follow the applicable national and European data protection regulations. To avoid messages and calls you could unsubsribe anytime you want.</p>
                    </div>
                    <div className="form-group d-flex justify-content-center">
                        <div className="col-lg-10 col-md-10 col-sm-12 mt-3 d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary"> Let's Talk </button>
                        </div>
                    </div>
                </form>
        )
    }
}

export default FirstForm
