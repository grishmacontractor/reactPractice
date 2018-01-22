//component to display post
var React = require('react');
var Post= React.createElement({
        render: function () {
            return(
                <div>
                    <h1>this.props.data.title</h1>
                    <p>this.props.data.content</p>
                    <h2>COMMENTS</h2>

                    <Comment content1={this.props.data.comments[0]}/>
                    <Comment content1={this.props.data.comments[1]}/>
                    <Comment content1={this.props.data.comments[2]}/>
                </div>
            );//end of return
        }//end of render function
    }//to write jsx code
);//end of createClass method

var Comment = React.createElement({
        render:function ()
        {
            return (
                <div>{this.props.content1}</div>
            );
        }//eo function
    }//some jsx code
);//eo createClass method
export default Post;