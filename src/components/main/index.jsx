import React, { Component } from 'react';
import Menu from 'components/menu/index';
import MainContent from 'components/main-content/index';

import './index.scss';

class Main extends Component {
  static defaultProps = {
    prefix: 'six-'
  };
  
  render() {
    const { prefix } = this.props;
    return <div className={`${prefix}main flex`}>
        <Menu />
        <MainContent />
    </div>
  }
}

export default Main;

