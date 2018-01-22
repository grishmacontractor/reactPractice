import React from 'react';

export default class CounterButton extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {count:1};
    }
    handleClick = () => {
        this.setState({count:this.state.count +1});
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

