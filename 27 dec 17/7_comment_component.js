import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function formatDate(date2)
{
    return date2.toLocaleDateString();
    //toLocaleDateString
}

function Comment(props) {
    return(
        <div className="Comment">
            <div className="UserInfo">
                <img className="Avatar" src={props.author.avatarUrl} alt={props.author.name}/>
                <div className="UserInfo-name">{props.author.name}</div>
                <div className="Comment-text">{props.text}</div>
                <div className="Comment-date">{formatDate(props.date1)}</div>
            </div>
        </div>
    );
}

const comment1={
    date1:new Date(),
    text:'its great learning react......',
    author:{name:'kitty',avatarUrl:'http://placekitten.com/g/64/64'},
};
ReactDOM.render(<Comment date1={comment1.date1} text={comment1.text} author={comment1.author}/>,document.getElementById('root'));
