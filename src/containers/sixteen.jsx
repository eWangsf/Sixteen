import React, { Component } from 'react';
// import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

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

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.testaction());
  }

  test() {
    const { dispatch } = this.props;
  }

  render() {
    const { prefix } = this.props;

    return <div className={`${prefix}container`} onClick={this.test.bind(this)}>
        <Header />
        <Main />
        <Controller />
      </div>
  }
}

// function mapStateToProps(state={}, ownProps) {
//   console.warn('mapStateToProps', arguments)
//   return Object.assign(state, {
//     dt: 'data from sixteen.jsx mapStateToProps'
//   });
// }

// var mapDispatchToProps = (dispatch, ownProps) => {
//   return bindActionCreators({
//     maction: () => {
//       debugger;
//       return {
//         type: 'maction',
//         data: 'maction data'
//       }
//     }
//   }, dispatch)
// }

// const connectedSixteen = connect(mapStateToProps, mapDispatchToProps)(Sixteen);
// export default connectedSixteen;

function select(state) {
  return Object.assign({}, state);
}

export default connect(select)(Sixteen);





