import React, { Component } from 'react';
import styled from 'styled-components';
import './index.scss';

const Title = styled.h1`
  color: ${props => props.primary ? 'blue' : ''};

  .content1 {
    background: pink;
    font-size: 12px;
    p {
      color: yellow;
    }
  }
`;


class Controller extends Component {
  static defaultProps = {
    prefix: 'six-'
  };

  render() {
    const { prefix } = this.props;
    
    return <div className={`${prefix}controller`}>
      <Title primary>
        controller
        <div className="content1">
          content1
          <p>yellow</p>
        </div>
      </Title>
      
    </div>
  }
}

export default Controller;
