import React, { Component } from 'react';
import { types } from 'data/index.json'
import './index.scss';


class Types extends Component {
  static defaultProps = {
    prefix: 'six-',
  };

  render() {
    const { prefix } = this.props;

    return <div className={`${prefix}types`} >
      <ul className="flex">
      {
        types.map((type, i) => <li className="type" key={i}>
          { type.title }
        </li>)
      }
      </ul>
    </div>
  }
}

export default Types;




