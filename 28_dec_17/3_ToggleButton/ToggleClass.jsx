//this Toggle component renders a button that lets the user toggle between “ON” and “OFF” states:
var React = require('react');
class Toggle extends React.Component{
    constructor(props)
    {
        super(props);
        this.state= {isToggleOn: true};
        this.handleClick= this.handleClick.bind(this);
    }//end constructor

    handleClick()
    {
        this.setState(prevState =>({isToggleOn:!prevState.isToggleOn}));
    }

    render()
    {
        return(
            <button onClick={this.handleClick}>
                {this.state.isToggleOn? 'ON':'OFF'}
            </button>
        );
    }//end of render
}//end of class Toggle
export default Toggle;