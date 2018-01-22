//component for login
var React = require('react');
class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick()
    {
        this.setState({isLoggedIn:true});
    }//eo handleLoginClick

    handleLogoutClick()
    {
        this.setState({isLoggedIn:false});
    }//eo handleLogoutClick

    render()
    {
        const isLoggedIn = this.state.isLoggedIn;
        let button = null;
        if(isLoggedIn)
        {

            button = <LogoutButton onClick1={this.handleLogoutClick} />;
        }else
            button = <LoginButton onClick1={this.handleLoginClick} />;

            return(
                <div>
                    <Greeting isLoggedIn={isLoggedIn} />
                    {button}
                </div>
            );
    }

}//end of LoginControl Class

function LoginButton(props) {
    return (
        <button onClick={props.onClick1}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick1}>
            Logout
        </button>
    );
}

function UserGreeting(props)
{
    return (<h1>Welcome Back!</h1>);
}//end of UserGreeting fun

function GuestGreeting() {
    return (<h1>Please Sign Up....</h1>);
}//end of GuestGreeting fun

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting/>;
    }else
        return <GuestGreeting/>;
}//end of Greeting fun

export default LoginControl;