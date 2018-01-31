import React, {Component} from 'react'
import Card from './Card'
export default class App extends Component {
    render() {
        return (
            <div>
                <Card title={'Title'} />
                <Card title={'Title'} subtitle={'Subtitle'} />
            </div>
        )
    }
}