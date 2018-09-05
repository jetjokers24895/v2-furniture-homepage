import React, {Component} from 'react';
import {Row,Col,Input,Badge} from 'antd';
import './headerBottom.css';
import * as settings from '../../model/setting';


const headerBottomClasses = {
  logo: "logo",
  search: "search-tool",
  caption: "main-caption",
  otherTag: "other-tag",
}


export default class HeaderBottom extends Component {
  render() {
    return(
      <div className="header-bottom">
        <Row>
          <Col span={2}>
            <div className="logo"><img src= "http://v2.furnituremaker.vn/static/assets/logo.svg" alt="logo"/></div>
          </Col>
          <Col span={6}>
            <div className="caption"><p>{settings.caption1}<br/>{settings.caption2}</p></div>
          </Col>
          <Col span={6}>
            <Input placeholder={settings.textSearchTool}/>
          </Col>
          <Col span={2}></Col>
          <Col span={8}>
            <Col span={8}>
              <p> <span className = "map-icon fa fa-map-marker-alt"></span>{settings.textAddress}</p>
            </Col>
            <Col span={8}>
              <center><a src="#"><span className="user-icon fa fa-user-circle"></span></a></center>
            </Col>
            <Col span={8}>
              <center><a src="#">
                <Badge count={5}><span className="user-icon fa fa-cart-plus"></span></Badge></a>
                </center>
            </Col>
          </Col>
        </Row>
      </div>
    )
  }
}