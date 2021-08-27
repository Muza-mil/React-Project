import React, { Component } from 'react'
import { DevShow } from '../Container Components/DevShow'
import { Button } from '../Container Components/Button'


export class WeHave extends Component {
    render() {
        return (
            <div>
                    <div className="row p-5">
                        <div className="col-lg-4 col-md-4 col-sm-6 card p-3">
                            <DevShow title="Front-End Developer" Id="frontend">
                                <p>
                                    Front end developers are experienced, they have knowledge of Javascript, HTML and CSS. They can work on different frame works and liberies such as Angular, React, Ember and Vue.
                                        </p>
                                <Button title="Hire Now"></Button>
                            </DevShow>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 card p-3">
                            <DevShow title="Back-End Developer" Id="backend">
                                <p>
                                    Our backend developers work on setting up backend of website and functionality with code review for bug fixing. We almost have all relvant developers having knowledge of programming languages such as Java, Kotlin, Node.js, python, PHP, Ruby, and Elixir.
                                        </p>
                                <Button title="Hire Now"></Button>
                            </DevShow>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 card p-3">
                            <DevShow title="Full-Stack Developer" Id="fullstack">
                                <p>
                                    Our full stack developers having frontend and backend programming languages knowledge. So they help in your development need.
                                        </p>
                                <Button title="Hire Now"></Button>
                            </DevShow>
                        </div>
                    </div>
                    <div className="row p-5">
                        <div className="col-lg-4 col-md-4 col-sm-6 card p-3">
                            <DevShow title="Web Developer" Id="web">
                                <p>
                                    Web develpers are specialized in achitecting website. They can find solution in order to present your business ideology over internet.
                                        </p>
                                <Button title="Hire Now"></Button>
                            </DevShow>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 card p-3">
                            <DevShow title="Mobile App Developer" Id="mobile">
                                <p>
                                    Mobile App developers have developed varity of applications. They can develope apps for iOS and android using (Swift, java, Kotlin, Objective C).
                                        </p>
                                <Button title="Hire Now"></Button>
                            </DevShow>
                        </div>
                    </div>
            </div>
        )
    }
}

export default WeHave
