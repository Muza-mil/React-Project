import React, { Component } from 'react'
import { Form } from '../Container Components/Form'
import { FormLabel } from '../Container Components/FormLabel'
import { FormInput } from '../Container Components/FormInput'
import { FormButton } from '../Container Components/FormButton'
import { Contact } from '../Container Components/Contact'


export class ContactUs extends Component {
    render() {
        return (
            <div>
                <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-12">
                            <Form>
                                <div className="card p-4">
                                    <FormLabel title="Contact us"></FormLabel>
                                    <FormInput type="text" Id="nameInput" valueInside="Name"></FormInput>
                                    <FormInput type="text" Id="cName" valueInside="Company Name"></FormInput>
                                    <FormInput type="text" Id="numInput" valueInside="Phone"></FormInput>
                                    <FormInput type="textarea" Id="txtInput" valueInside=""></FormInput>
                                    <FormButton title="Send"></FormButton>
                                </div>
                            </Form>
                        </div>
                        <div className="col-lg-4 col-md-8 col-sm-12 p-5 mt-5">
                            <div className="container card p-4">
                                <Contact label="Address">
                                    <label className="contactstyl"> ABC address </label>
                                </Contact>
                                <Contact label="Email">
                                    <label className="contactstyl"> abc@gmail.com </label>
                                </Contact>
                                <Contact label="Phone">
                                    <label className="contactstyl"> 004932343433235 </label>
                                </Contact>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default ContactUs
