import React, { Component } from 'react';
import TodoItem from './TodoItem';
export default class TodoList extends Component {
    constructor()
    {
        super();
        this.state = {
            names:['Grishma','Madhavi','John']
        }
    }
  render() {
    return (
      <ul>
          {
              this.state.names.map((name) => {
                      return <TodoItem key={name} detail={name}/>
                  }
              )
          }
      </ul>
    );
  }
}
