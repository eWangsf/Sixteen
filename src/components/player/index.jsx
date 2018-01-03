import React, { Component } from 'react';

import './index.scss';

class Player extends Component {
  static defaultProps = {
    prefix: 'six-',
    title: '夜空中最亮的星',
    // title: '夜空中',
    singer: '逃跑计划'
  };

  render() {
    const { prefix, title, singer } = this.props;
    
    return <div className={`${prefix}player flex`}>
      <div className="cover flex">
        <div className="cover-img"></div>
      </div>
      <div className="info flex">
        <span className="title">{title}</span>
        <span className="singer">{singer}</span>
      </div>
      <div className="operation">
        <span className="icon share"></span>
        <span className="icon like liked"></span>
      </div>
    </div>
  }
}

export default Player;
