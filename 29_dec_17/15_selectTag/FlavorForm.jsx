import React from 'react';
import a from './a.jpeg';
import './fruits.css';
class FlavorForm extends React.Component{
        constructor(props)
        {
            super(props);
            this.state = {value:'coconut'};

            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleChange(event){
            this.setState({value: event.target.value});
        }

        handleSubmit(event){
            alert('your fav flavor is: '+this.state.value);
            event.preventDefault();
        }

        render(){
            return(
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Pick your favourite IceCream Flavor:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="grapefruit">Grape Fruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </label>
                    <img src={a} className="App-logo" alt="logo" />
                    <input type="submit" value="Submit" />
                </form>
            );
        }
}//end of ListItem Component
export default FlavorForm;
