import React from 'react'
import ReactDOM from 'react-dom'
import MyComponent from  './MyComponent'
import MyHOC from './MyHOC'
const App = MyHOC(MyComponent)

ReactDOM.render(<App />,document.getElementById('root'))

