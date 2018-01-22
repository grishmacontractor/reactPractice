var React = require('react');

class Clock extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={date1: new Date()};
    }
    render() {
        return (
          <div>
              <h1>Current Time using Class</h1>
              <h2>It is {this.state.date1.toLocaleTimeString()}</h2>
          </div>
        );
    }

    componentDidMount()
    {
        this.timerID = setInterval(() => this.tick(),1000);
    }

    componentWillUnmount()
    {
        clearInterval(this.timerID);
    }

    tick()
    {
        this.setState({date1: new Date()});
    }
}

export default Clock;
