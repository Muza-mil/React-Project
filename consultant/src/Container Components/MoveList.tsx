import React, { Component } from 'react'

export class MoveList extends Component <{}, {text: string}> {
    constructor(props){
        super(props);
        this.state = {
            text: ""   
        };
    }

    render() {
        const list = [ "Front-End", "Back-End", "Full-Stack", "Web Application", "Mobile Application"];
        const rand = Math.floor(Math.random() * list.length) + 0;
        setTimeout(() => {
            this.setState({ text: list[rand]});
          }, 2000);  
        return(
            <h2> {this.state.text} </h2>
        )
    }
}

export default MoveList
