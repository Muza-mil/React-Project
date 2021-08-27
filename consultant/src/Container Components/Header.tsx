import React, { Component } from 'react'

export class Header extends Component {
    render() {
        const headerData = [
            {
                id: 1,
                text: 'Home',
                url: './index.html'
            },
            {
                id: 2,
                text: 'What we offer',
                url: '#What-We-Offer'
            },
            {
                id: 3,
                text: 'How we work',
                url: '#How-we-work'
            },
            {
                id: 4,
                text: 'We have',
                url: '#We-have'
            },
            {
                id: 5,
                text: 'Contact us',
                url: "#Contact-us"
            }
        ]   
        const headerList = headerData.map((arr, i) => {
            return (
                <li className="nav-item" key={headerData[i].id.toString()}>
                    <a className="nav-link nav-text" id="navItems" href={headerData[i].url}> {headerData[i].text} </a>
                </li>
            )
        })
        return (
            <nav className="navbar navbar-expand-lg fixed-top navbar-light">
                <a className="navbar-brand" href="#Home">
                    <img src="./media/logo.svg" alt="" height="30"/>  
                </a>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {headerList}
                    </ul>
                </div>

                <div className="nav-lang">
                    <a href="#" className="nav-language lang-current"> DE </a> 
                    <label id="langGap"> | </label>
                    <a href="#" className="nav-language"> EN </a>
                </div>
            </nav>
        )
    }
}

export default Header
