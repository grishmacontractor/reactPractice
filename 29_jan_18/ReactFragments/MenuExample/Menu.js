import React from 'react'

export default class Menu extends React.Component
{
    render()
    {
        return(
            <React.Fragment>
                <li>File</li>
                <li>Edit</li>
                <li>View</li>
                <li>Help</li>
                <li>Format</li>
            </React.Fragment>
        )
    }
}