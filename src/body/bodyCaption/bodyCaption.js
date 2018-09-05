import React, {Component,Fragment} from 'react';
import PropTypes from 'prop-types';
import {Row,Col,Tab} from 'antd';
import './bodyCaption.css';
import * as settings from '../../model/setting';



class BodyCaption extends Component {
  render() {
    return(
      <Row>
        <Col span="{24}">
          <div className= "text-body-caption">
            <p>{settings.textBodyCaption}</p>
          </div>
        </Col>
      </Row>
    )
  }
}

export default BodyCaption