import React, { Component } from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './PlayNine.css';
const Stars =(props) => {
    return (
        <div className="col-5">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
        </div>
    );
}

const Button =(props) => {
    return (
        <div  className="col-2">
            <button>=</button>
        </div>
    );
}

const Answer =(props) => {
    return (
        <div  className="col-5">
            ffff
        </div>
    );
}

const Numbers = (props) => {
    return(

        <div className="card text-center">
<div>
    <span>1</span>
    <span className="selected">2</span>
    <span className="used">3</span>
</div>
        </div>
    );
}
//class Game
export default class Game extends Component {
  render() {
    return (
        <div  className="container">
            <h3>Play Nine</h3>
            <hr />
                <div className="row">
                <Stars />
                <Button />
                <Answer />
                </div>
            <br/>
            <Numbers />

        </div>
    );
  }
}

