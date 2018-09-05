import React, {Component} from 'react';
import {Row,Col} from 'antd';
import './indexing.css';

export default class Indexing extends Component {
  render() {
    return (
      <Row>
        <Col span={24}>
        <p>
          {this.props.category} > {this.props.design}
        </p>
        </Col>
      </Row>
    )
  }
}