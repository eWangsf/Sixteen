import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/action';

export class Sixteen extends Component {

  render() {
    const {  } = this.props;
    // console.warn(this.props);

    return <div>
        <p>sixteen page</p>
      </div>
  }
}

function mapStateToProps(state={}, ownProps) {
  console.warn('mapStateToProps', state, ownProps);
  return state;
}

const connectedSixteen = connect(mapStateToProps, actions)(Sixteen);
export default connectedSixteen;

