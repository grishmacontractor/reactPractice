//Creating a parameterized function called addition and displaying its value
import ReactDOM from 'react-dom';
import './index.css';
ReactDOM.render(add(5,1), document.getElementById('root'));

function add(a,b) {
    var c=a+b;
    return c;

}