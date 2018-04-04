import React, { Component } from 'react';
import Types from 'components/types/index';
import SongList from 'components/song-list/index';
import './index.scss';

class MainContent extends Component {
  static defaultProps = {
    prefix: 'six-'
  };

  render() {
    const { prefix } = this.props;

    return <div className={`${prefix}main-content`}>
      <Types />
      <SongList />
      main-content
    </div>
  }
}

export default MainContent;


