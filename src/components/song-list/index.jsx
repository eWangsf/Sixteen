import React, { Component } from 'react';
import './index.scss';


class SongList extends Component {
  static defaultProps = {
    prefix: 'six-',
    coverImg: 'http://p1.music.126.net/Jd4ozp4099okTavdjmf9MQ==/109951163097839596.jpg',
    title: '2017年度热议单曲TOP100'
  };

  render() {
    const { prefix, coverImg, title } = this.props;

    return <div className={`${prefix}song-list`}>
      <div className="cover">
        <img src={coverImg} />
      </div>
      <p className="title">
        {title}
      </p>
    </div>
  }
}

export default SongList;

