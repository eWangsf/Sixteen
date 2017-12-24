import React, { Component } from 'react';

import './index.scss';

class Player extends Component {
  static defaultProps = {
    prefix: 'six-'
  };

  render() {
    const { prefix } = this.props;
    
    return <div className={`${prefix}player`}>
      player
    </div>
  }
}

export default Player;
