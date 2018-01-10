import React, { Component } from 'react';
import Child from './Child';
import Modal from './Modal';


export default class Parent extends Component {
    constructor(props)
    {
        super(props);
        this.state = {clicks:0};
    }

    handleClick= () =>{
        this.setState(prevState => ({clicks: prevState.clicks + 1}));
    }

     render() {
        return (
        <div onClick={this.handleClick}>
            <p>Number of clicks: {this.state.clicks}</p>
            <p>Open up the browser DevTools
                to observe that the button
                is not a child of the div
                with the onClick handler
            </p>
            <Modal>
                <Child />
            </Modal>
        </div>
    );
  }
}

