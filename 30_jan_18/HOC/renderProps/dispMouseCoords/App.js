import React from 'react'
import Mouse from './Mouse'
export default class App extends React.Component {
    render() {
        return (
            <div style={{ height: '100%', border: '1px solid' }}>
                <Mouse render={({ x, y }) => (
                    // The render prop gives us the state we need
                    // to render whatever we want here.
                    <h1>The mouse position is ({x}, {y})</h1>
                )}/>
            </div>
        )
    }
}
