import React, { Component } from 'react';
import menuData from 'data/menu.json';
import Player from 'components/player/index';

import './index.scss';


class Menu extends Component {
  static defaultProps = {
    prefix: 'six-'
  };

  render() {
    const { prefix } = this.props;
    const { myList=[], activeMylist=0, collectList=[], activeCollect=0, newList=[], activeNew=0 } = menuData;

    return <div className={`${prefix}menu`}>
      <div className="section recommand">
        <div className="section-title">推荐</div>
        <ul className="section-list">
          <li className="item menu-item">
            <span className="icon find"></span>发现音乐
          </li>
          <li className="item menu-item">
            <span className="icon broadcast"></span>私人FM
          </li>
          <li className="item menu-item">
            <span className="icon mv"></span>MV
          </li>
          <li className="item menu-item">
            <span className="icon friends"></span>朋友
          </li>
        </ul>
      </div>
      <div className="section my-music">
        <div className="section-title">我的音乐</div>
        <ul className="section-list">
          <li className="item menu-item">
            <span className="icon itunes"></span>iTunes音乐
          </li>
          <li className="item menu-item">
            <span className="icon download"></span>下载的音乐
          </li>
          <li className="item menu-item">
            <span className="icon person"></span>我的歌手
          </li>
          <li className="item menu-item">
            <span className="icon mv"></span>我的MV
          </li>
          <li className="item menu-item">
            <span className="icon music2"></span>我的电台
          </li>
        </ul>
      </div>

      <div className="section collect-list">
        <div className="section-title">创建的歌单</div>
        <ul className="section-list">
          {
            myList.map((myitem, i) => <li key={i} className="item">
              <span className="icon list"></span>
              <span className="title">{myitem.title}</span>
            </li>)
          }
        </ul>
      </div>
      
      <div className="section collect-list">
        <div className="section-title">收藏的歌单</div>
        <ul className="section-list">
          {
            collectList.map((collectitem, i) => <li key={i} className="item">
              <span className="icon list"></span>
              <span className="title">{collectitem.title}</span>
            </li>)
          }
        </ul>
      </div>

      <div className="player">
        <Player />
      </div>
    </div>
  }
}


export default Menu;

