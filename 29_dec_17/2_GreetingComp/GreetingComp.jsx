//component to Greet
var React = require('react');
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

export default Greeting;