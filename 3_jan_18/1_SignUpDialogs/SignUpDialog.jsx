import React, { Component } from 'react';
import './ColorBorders.css';
import Dialog from'./Dialog.jsx'
class SignUpDialog extends Component {
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.handleSignUp=this.handleSignUp.bind(this);
        this.state={login:''};
    }
    handleChange(e) {
        this.setState({login: e.target.value});
    }

    handleSignUp() {
        alert(`Welcome aboard,${this.state.login}`);
    }
    render() {
        return (
            <Dialog title="Mars Exploration Program"
                    message="How should we refer u?">
            <input value={this.state.login}
                   onChange={this.handleChange}/>
            <button onClick={this.handleSignUp}>
                Sign Me up!
            </button>
        </Dialog>
        );
  }
}
export default SignUpDialog;
