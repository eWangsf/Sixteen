import React, { Component } from 'react';

import './index.scss';

class Types extends Component {
  static defaultProps = {
    prefix: 'six-',
  };

  render() {
    const { prefix } = this.props;

    return <div className={`${prefix}types`} >
      types container
    </div>
  }
}

export default Types;




