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
      <div className="left flex">

        <div className="logo" onClick={this.backToIndex.bind(this)}>
          <span>网易云音乐</span>
        </div>
        <div className="nav flex">
          <div className="btns flex">
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
        <div className="setting flex">
          <div className="btns-container flex">
            <span className="icon mail"></span>
            <span className="icon set"></span>
          </div>
        </div>

      </div>
      <div className="right flex">
        <div className="my-info flex">
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

