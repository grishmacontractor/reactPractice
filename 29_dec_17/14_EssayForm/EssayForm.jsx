import React from 'react';
class EssayForm extends React.Component{
        constructor(props)
        {
            super(props);
            this.state = {value:'Please write an essay.....'};

            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleChange(event){
            this.setState({value:event.target.value.toUpperCase()});
        }

        handleSubmit(event){
            alert('Essay Submitted : '+this.state.value);
            event.preventDefault();
        }

        render(){
            return(
                <form onSubmit={this.handleSubmit}>
                    <label>Essay: <textarea value={this.state.value} onChange={this.handleChange} /></label>
                    <input type="submit" value="Submit" />
                </form>
            );
        }
}//end of ListItem Component
export default EssayForm;
