import React from 'react'

var newData = {
    data: 'Data from HOC...',
}

var MyHOC = ComposedComponent => class extends React.Component {

    componentDidMount() {
        this.setState({
            data: newData.data
        })
    }

    render() {
        return <ComposedComponent {...this.props} {...this.state} />
    }
}
export default MyHOC