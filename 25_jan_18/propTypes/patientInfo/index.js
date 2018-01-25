import React from 'react'
import ReactDOM from 'react-dom'
import Patient from "./Patient";


ReactDOM.render(<Patient receptid={1} name="John Doe" medicines={['m1','m2','m3']} />,
    document.getElementById('root'))

