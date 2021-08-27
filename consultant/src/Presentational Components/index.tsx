import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Header } from '../Container Components/Header'
import { Banner } from '../Container Components/Banner'
import { Button } from '../Container Components/Button'
import { Form } from '../Container Components/Form'
import { FormInput } from '../Container Components/FormInput'
import { FormLabel } from '../Container Components/FormLabel'
import { FormButton } from '../Container Components/FormButton'
import { Footer } from '../Container Components/Footer'
import { FormNote } from '../Container Components/FormNote'
import { MoveList } from '../Container Components/MoveList'
import { WhatWeOffer } from '../Presentational Components/WhatWeOffer'
import { WeHave } from '../Presentational Components/WeHave'
import { HowWeWork } from '../Presentational Components/HowWeWork'
import { ContactUs } from '../Presentational Components/ContactUs'
import '../main.css'

class Home extends Component {
    render() {

        return (
            <div className="container-fluid">

                {/* ------------------------------- Header Section ------------------------ */}
                <header>
                    <Header />
                </header>
                {/* ------------------------------- Header Section ------------------------ */}

                {/* ------------------------------- Page 1 Section ------------------------ */}
                <div className="row p-5 mt-5 Home-area">
                    <div className="col-lg-3 col-md-4 col-sm-12 pb-5">
                        <Form>
                            <div className="Front-form p-3">
                                <div className="d-flex justify-content-center">
                                    <FormLabel title="Want to talk to us?"></FormLabel>
                                </div>
                                <FormInput type="text" Id="name" valueInside="Full Name"></FormInput>
                                <FormInput type="text" Id="phone" valueInside="Phone No"></FormInput>
                                <FormInput type="text" Id="email" valueInside="Email"></FormInput>
                                <FormInput type="text" Id="company" valueInside="Company"></FormInput>
                                <FormNote>
                                    <label> Legal Note : </label>
                                    <p>Thank you for your interest in the our website. Your data privacy will be considered and protected. You can unsubscribe any time</p>
                                </FormNote>
                                <FormButton title="Let's Talk"></FormButton>
                            </div>
                        </Form>
                    </div>
                    <div className="col-lg-2 col-md-1 col-sm-2 pb-5"></div>
                    <div className="col-lg-7 col-md-7 col-sm-12">
                        <div className="row banner-title pb-5">
                            <h1> Are you looking for best? </h1>
                        </div>
                        <div className="row">
                            <MoveList/>
                        </div>
                        <div className="row pb-5">
                            <h2> Developer </h2>
                        </div>
                        <div className="row pt-5">
                            <h3> - Fast Searching </h3>
                        </div>
                        <div className="row pb-5">
                            <h3> - Experienced Developers </h3>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12 p-4 mr-5 btun">
                                <Button title="Hire Developer Now"></Button>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 p-4 btun">
                                <Button title="Apply as Developer"></Button>
                            </div>
                        </div>                        
                    </div>
                </div>
                {/* ------------------------------- Page 1 Section ------------------------ */}

                {/* ------------------------------- Page 2 Section ------------------------ */}
                <WhatWeOffer />
                {/* ------------------------------- Page 2 Section ------------------------ */}

                {/* ------------------------------- Page 3 Section ------------------------ */}
                <div className="Page-three-area">
                    <WeHave />
                </div>

                {/* ------------------------------- Page 3 Section ------------------------ */}

                {/* ------------------------------- Page 4 Section ------------------------ */}
                <div className="row Page-four-area p-5">
                    <section>
                        <HowWeWork />
                    </section>
                </div>
                {/* ------------------------------- Page 4 Section ------------------------ */}

                {/* ------------------------------- Page 5 Section ------------------------ */}
                <div className="Page-five-area p-5">
                    <ContactUs />
                </div>
                {/* ------------------------------- Page 5 Section ------------------------ */}

                {/* ------------------------------- Footer Section ------------------------ */}
                <footer>
                    <Footer />
                </footer>
                {/* ------------------------------- Footer Section ------------------------ */}
            </div>
        )
    }
}

const root = document.getElementById('root-app')
ReactDOM.render(<Home />, root)
