import React from 'react';
import './ColorBorders.css'
class FancyBorder extends React.Component{
    render()
    {
        return(
          <div className={'FancyBorder-'+this.props.color}>
              {this.props.children}
          </div>
        );
    }//end render
}//end class
export  default FancyBorder;
