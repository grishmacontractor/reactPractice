import React, { Component } from 'react';
import Modal from './Modal';
import './App1.css';

export default class App extends Component {
    constructor(props)
    {
        super(props);
        this.state = {showModal:false};
    }

    handleShow = () =>{
        this.setState({showModal:true});
    }

    handleHide = () => {
        this.setState({showModal:false});
    }
  render() {

        const modal= this.state.showModal ? (
            <Modal>
                <div className="modal">
                    <div>
                        With a portal, we can render content into a different
                        part of the DOM, as if it were any other React child.
                    </div>
                    This is being rendered inside the #modal-container div.
                    <button onClick={this.handleHide}>Hide modal</button>
                </div>
            </Modal>
        ):null;
    return (
        <div className="app">
            This div has overflow:hidden
            <button onClick={this.handleShow}>Show modal</button>
            {modal}
        </div>
    );
  }
}

