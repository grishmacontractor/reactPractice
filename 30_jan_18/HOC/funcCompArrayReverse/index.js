import React from 'react'
import ReactDOM from 'react-dom'

const ignore = (anything) => (props) => {
    return(
        <h1>Reverse Array Using Higher Order Functional Component<br />{anything.reverse().join(' ')}</h1>)
}
let HeroList = ['one','two','three']
const IgnoreHeroList = ignore(HeroList)

ReactDOM.render(<IgnoreHeroList />,document.getElementById('root'))

