import React, { Component } from 'react';
import './mycss.css';

export default class TodoItem extends Component {
   render() {
    return (
      <li onClick={()=> {
          this.props.clickHandler(this.props.index)
      }}  className = {this.props.details.completed ?'completed':''}>
          {this.props.details.name}
      </li>
    );
  }
}
