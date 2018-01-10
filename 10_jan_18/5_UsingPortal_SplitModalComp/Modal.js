import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');
export default class Modal extends React.Component{

    constructor(props){
        super(props);
        this.e1 = document.createElement('div');
    }

    componentDidMount()
    {
        console.log('componentDidMount');
        modalRoot.appendChild(this.e1);
    }

    componentWillUnMount()
    {
        console.log('componentWillUnMount');
        modalRoot.removeChild(this.e1);
    }
render() {
    return ReactDOM.createPortal(this.props.children, this.e1);
}

}//end class