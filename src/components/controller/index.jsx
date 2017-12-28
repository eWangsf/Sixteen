import React, { Component } from 'react';

import './index.scss';

class Controller extends Component {
  static defaultProps = {
    prefix: 'six-'
  };

  render() {
    const { prefix } = this.props;
    
    return <div className={`${prefix}controller`}>
      controller
    </div>
  }
}

export default Controller;
