import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function formatDate(date2)
{
    return date2.toLocaleDateString();
    //toLocaleDateString
}

function Avatar(props) {
    return(
        <img
             className="Avatar"
             src={props.user2.avatarUrl}
             alt={props.user2.name}
        />
    );
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user2={props.user1}/>
                <div className="UserInfo-name">
                 {props.user1.name}
                </div>
        </div>
    );
}
function Comment(props) {
    return(
        <div className="Comment">
            <UserInfo user1={props.author}/>
            <div className="Comment-text">{props.text}</div>
            <div className="Comment-date">
                {formatDate(props.date1)}
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
