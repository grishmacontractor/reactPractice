//component to display post
var React = require('react');
class Post extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.data.title}</h1>
                <p>{this.props.data.content}</p>
                <h2>COMMENTS</h2>

                <Comment content1={this.props.data.comments[0]}/>
                <Comment content1={this.props.data.comments[1]}/>
                <Comment content1={this.props.data.comments[2]}/>
            </div>
        );//end of return
    }//end of render function
};//end of class method

class Comment extends React.Component{
    render(){
        return (
            <div>{this.props.content1}</div>
        );
    }//end of render function.
};//end of comment class.
export default Post;