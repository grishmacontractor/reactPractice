import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App1.css';
//*******************************************************************************class Modal
const appRoot = document.getElementById('app-root');
const modalRoot = document.getElementById('modal-root');
class Modal extends React.Component{

    constructor(props){
        super(props);
        this.e1 = document.createElement('div');
        //this.e1.setAttribute("id", "e11");
    }

    componentDidMount()
    {
        console.log('componentDidMount');
        modalRoot.appendChild(document.getElementById('p1'));
    }

    componentWillUnMount()
    {
        console.log('componentWillUnMount');
        document.body.removeChild(document.getElementById('p1'));
    }

    render() {
        return ReactDOM.createPortal(this.props.children, document.getElementById('p1'));
    }

}//end class
//*******************************************************************************class App
class App extends Component {
    constructor(props)
    {
        super(props);
        this.state = {showModal:false};
    }

    handleShow = () =>{
        console.log("handleshow");
        this.setState({showModal:true});
    }

    handleHide = () => {
        console.log("handlehide");
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

ReactDOM.render(<App />, appRoot);
//registerServiceWorker();
