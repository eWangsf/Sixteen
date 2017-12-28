import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions/action.js';

import Header from 'components/header/index';
import Main from 'components/main/index';
import Controller from 'components/controller/index';

import './sixteen.scss';

export class Sixteen extends Component {
  static defaultProps = {
    prefix: "six-"
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { prefix } = this.props;

    return <div className={`${prefix}container`}>
        <Header />
        <Main />
        <Controller />
      </div>
  }
}

function mapStateToProps(state={}, ownProps) {
  return state;
}

const connectedSixteen = connect(mapStateToProps)(Sixteen);
export default connectedSixteen;

