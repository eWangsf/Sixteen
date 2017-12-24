import React, { Component } from 'react';

import './index.scss';

class Main extends Component {
  static defaultProps = {
    prefix: 'six-'
  };
  render() {
    const { prefix } = this.props;
    return <div className={`${prefix}main`}>
      main
    </div>
  }
}

export default Main;

