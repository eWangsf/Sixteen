import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from 'actions/action.js';

export class Sixteen extends Component {
  static defaultProps = {
    prefix: "six"
  };

  constructor(props) {
    super(props);

  }

  render() {
    const { prefix } = this.props;
    console.warn(prefix);

    return <div>
        <p>sixteen page2</p>
      </div>
  }
}

function mapStateToProps(state={}, ownProps) {
  return state;
}

const connectedSixteen = connect(mapStateToProps)(Sixteen);
export default connectedSixteen;

