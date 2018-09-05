import React, {Component} from 'react';
import './productInfo.css';
import { Row, Col, Button } from 'antd';
import * as settings from '../../../model/setting';


export default class ProductInfo extends Component {
  render() {
    return(
      <Row className = "product-info">
        <Col span={24} className="product-name">{this.props.name}</Col>
        <Col span={24} className="product-code">{this.props.productCode}</Col>
        <Col span={24}><center><hr/></center></Col>
        <Col span={24} className="product-price">{this.props.price.toString() + '.000 đ'}</Col>
        <Col span={24} className="product-in-stock">{"còn " + this.props.inStock.toString() + " sản phẩm"}</Col>
        <Col span={12} ><Button>{settings.textBuyButton}</Button></Col>
        <Col span={12} ><Button>{settings.textDesignButton}</Button></Col>
      </Row>
      
    )
  }
}