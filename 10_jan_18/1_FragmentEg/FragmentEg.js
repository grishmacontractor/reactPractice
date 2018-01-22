import React, { Component } from 'react';

class FragmentEg extends Component {
  render() {
    return (
        <React.Fragment>
      Some Text.
          <h2>A Heading.</h2>
          More Text.
          <h2>Another Heading</h2>
          Even more text.
        </React.Fragment>
    );
  }
}

export default FragmentEg;
