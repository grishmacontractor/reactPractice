import React from 'react';

export default class CounterButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {count:1};
    }
    handleClick = () => {
        this.setState({count:this.state.count +1});
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("SCU called....");
        if(this.props.color !== nextProps.color)
        {
            console.log("in color if");
            return true;
        }
        if(this.state.count!== nextState.count)
        {
            console.log("in count if cuur cnt = "+this.state.count+" nxt cnt = "+nextState.count);
            return true;
        }
            return false;
    }

  render() {
      console.log("render called....");
    return (
      <button color={this.props.color}
              onClick={this.handleClick}>
          Count:{this.state.count}

      </button>
    );
  }
}

