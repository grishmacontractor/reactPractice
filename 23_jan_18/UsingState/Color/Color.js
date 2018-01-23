import React from 'react';


class Color1 extends React.Component
{
    constructor()
    {
        super();
        this.state = {name:"red"}
    }

    render()
    {
        setTimeout(() => {this.setState({name: "pink"})}, 6000)

        return (
            <div>

                {this.state.name}

            </div>
        );

    }
}
export default Color1;
