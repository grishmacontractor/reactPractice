import React, { Component } from 'react';

class LifeCycleDemo extends Component {
    constructor(props)
    {
        super(props);
        this.state = {count:0}
        //this.incrCount=this.incrCount.bind(this);
        console.log("constructor");
    }
    incrCount =()=>
    {
        this.setState({count:this.state.count + 1});
    }

    componentWillMount()
    {
        console.log("Will Mount");
    }

    shouldComponentUpdate()
    {
        console.log("should component update.......is called only after once render is called.")
        if(this.state.count >= 10)
        {
            return false;
        }
        return true;
    }
    componentDidMount()
    {
        console.log("Did Mount....Called after render method.")
    }
render() {
        console.log("render called.");
    return (
      <div>
          {this.state.count}
       <button onClick={this.incrCount}>Increment</button>
      </div>
    );
  }
}

export default LifeCycleDemo;
