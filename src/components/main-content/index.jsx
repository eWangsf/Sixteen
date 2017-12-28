import React, { Component } from 'react';

import './index.scss';

class MainContent extends Component {
  static defaultProps = {
    prefix: 'six-'
  };

  render() {
    const { prefix } = this.props;

    return <div className={`${prefix}main-content`}>
      main-content
    </div>
  }
}

export default MainContent;


