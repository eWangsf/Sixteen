import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

import Menu from 'components/menu/index';
import MainContent from 'components/main-content/index';

import './index.scss';

class Main extends Component {
  static defaultProps = {
    prefix: 'six-'
  };

  constructor(props) {
    super(props);
    this.state = {
      state: 0,
    }
  }

  componentDidMount() {
    const { props } = this;
  }
  
  render() {
    const { prefix } = this.props;
    const { state=0 } = this.state;

    return <div className={`${prefix}main flex`}>
        <Menu />
        {
          state === 0 ? <MainContent /> : null
        }
    </div>
  }
}

const connectedMain = connect((state={}, ownProps) => state)(Main);
export default connectedMain;

