import React from 'react'
import ErrorBoundary from 'react-error-boundary'

class CheckNumber extends React.Component {
    constructor(props) {
        super(props);
        this.state = { num: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(({num}) => ({
            num: num + 1
        }));
    }

    render() {
        if(this.state.num > 10)
        {
            if (this.state.num%2 === 0) {
                // Simulate a JS eriror
                throw new Error('I crashed as num is greater than 10 and remainder is zero!');
            }

        }


        return <h1 onClick={this.handleClick}>{this.state.num}</h1>;
    }
}

export default function App() {
    return (
        <div>
            <ErrorBoundary><CheckNumber /></ErrorBoundary>
        </div>
    )
}



