var React = require('react');

function WarningBanner(props) {
    if(!props.warn)
    {
        return null;
    }

    return (<div className="warning">Warning !</div>);
}//end of WarningBanner

class Page extends React.Component{
    constructor(props){
        super(props);
        this.state = {showWarning:true}
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }//eo constructor

    handleToggleClick()
    {
        this.setState(prevState =>({
            showWarning:!prevState.showWarning
        }));
    }//eo handleToggleClick

    render()
    {
        return(<div>
            <WarningBanner warn={this.state.showWarning}/>
            <button onClick={this.handleToggleClick}>
                {this.state.showWarning? 'Hide':'Show'}
            </button>
        </div>);
    }
}//end of Page Component
export default Page;
