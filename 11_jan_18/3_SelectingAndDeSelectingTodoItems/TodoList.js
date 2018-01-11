import React, { Component } from 'react';
import TodoItem from './TodoItem';
export default class TodoList extends Component {
    constructor()
    {
        super();
        this.state = {
            tasks:[
            {
                name:'Buy Milk',completed:false
            },
            {
                name:'Buy Sugar',completed:false
            },
            {
                name:'Buy Bread',completed:false
            }
    ]
        }//end state
    }//end constructor

    changeStatus = (index) =>{
        var tasks = this.state.tasks;
        var task = tasks[index];
        task.completed = !task.completed;
        this.setState(
            {
                tasks:tasks
            }
        )
        console.log(this.state.tasks[index]);
    }//end changeStae
  render() {
    return (
      <ul>
          {
              this.state.tasks.map((task,index) => {
                      return <TodoItem key={task.name}
                                       index={index}
                                       details={task}
                                       clickHandler={this.changeStatus}
                      />
                  }
              )
          }
      </ul>
    );
  }
}
