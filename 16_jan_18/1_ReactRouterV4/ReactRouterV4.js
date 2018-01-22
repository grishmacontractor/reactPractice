import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    //Link,
    NavLink
} from 'react-router-dom'


const Home = () => (
    <h1>Home</h1>
)
const About = () => (
    <h1>About</h1>
)

const Links = () => (
    <ul>
        <li><NavLink exact activeClassName="selected" to='/'>Home</NavLink></li>
        <li><NavLink activeClassName="selected" to="/about">About</NavLink></li>
    </ul>
)


const App = () => (
    <Router>
        <div>
            <Links />
            <Route exact path='/' component ={Home} />
            <Route exact path='/about' component ={About} />
        </div>
    </Router>
)
export default App;
