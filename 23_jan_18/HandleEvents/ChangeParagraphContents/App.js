import React from 'react';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: "This is a Paragraph Tag"
        }
        this.updatePara = this.updatePara.bind(this)
    };
    updatePara() {
        this.setState({data: "Content Updated..."})
    }
    render() {

        return (
            <div>
                <button onClick = {this.updatePara}>UPDATE PARAGRAPH</button>
                <p>{this.state.data}</p>
                    </div>
        );
    }
}