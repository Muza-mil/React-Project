import React, { Component } from 'react'
import { Button } from '../Container Components/Button'
import { ShowDetail } from '../Container Components/ShowDetail'


export class WhatWeOffer extends Component {
    render() {
        return (
            <div>
                <ShowDetail side="right" title="Clients">
                    <p>
                        Company offers you the best qualified specialists that can help fit in your required achievements you want on your product. We have specialists with experiences on different technologies and areas. And they are determined to work on challenging tasks.
                    </p>
                    <Button title="Find Developer"></Button>
                    {/* <img src="../media/developers.png" alt="No Found" width="100%"/> */}
                </ShowDetail>
                <ShowDetail side="left" title="Network">
                    <p>
                        Company gives you best opportunities to work with the top tech companies. Companies that have extra ordinary team work with highly motivated and qualified team members. You may have best chance to work with them and express your skills within the team work.
                    </p>
                    <Button title="Join as Developer"></Button>
                    {/* <img src="./media/network.jpg" alt="No Found" width="100%"/> */}
                </ShowDetail>
            </div>
        )
    }
}

export default WhatWeOffer
