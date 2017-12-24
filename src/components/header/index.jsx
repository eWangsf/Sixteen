import React, { Component } from 'react';
import './index.scss';

class Header extends Component {

  static defaultProps = {
    prefix: 'six-'
  };

  backToIndex() {
    console.warn('backToIndex');
  }

  render() {
    const { prefix } = this.props;

    return <div className={`${prefix}header flex`}>
      <div className="logo" onClick={this.backToIndex.bind(this)}>
        <span>网易云音乐</span>
      </div>
      <div className="nav flex">
        <div className="btns">
          <span className="icon step back"></span>
          <span className="icon step forward"></span>
        </div>
        <div className="search flex">
          <div className="icon"></div>
          <div className="search-container">
            <input type="text" placeholder="搜索音乐，歌手，歌词，用户" />
          </div>
        </div>
      </div>
      <div className="setting">
        <div className="btns-container">
          <span className="icon mail"></span>
          <span className="icon setting"></span>
        </div>
        <div className="user-container">
          <div className="avatar">
          </div>
          <div className="more-info">
          </div>
        </div>
      </div>
    </div>
  }
}

export default Header;

