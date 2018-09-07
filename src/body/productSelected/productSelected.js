import React,{ Component } from "react";
import { Row, Col,Card} from 'antd';
import './productSelected.css';
import * as setting from './../../model/setting';
import * as $ from 'jquery';
import ProductInfo from './productInfo/productInfo';
import {catalogThis} from '../catalog/catalog'; 

const gridStyle = {
  width: '80%',
  textAlign: 'center',
};


export default class ProductSelected extends Component {
  
  constructor(props){
    super(props);
    console.log(catalogThis);
    this.state = {
      productSelected : catalogThis.state.productSelected
    }

  }

  // getProductInfo = () => {
  //   let that = this;
  //   $.get("v2-api")
  // }
  render() {

    return (
      
      <Card className = "product-selected">
      <Row className="product-row">
      <Col span={12} className="product-image">
        <Card.Grid style={gridStyle}>
          <img src = {setting.urlBase + this.state.productSelected['thumbnail']['url']}/>
          <div className="text-block">
          <h4>{'Name of Design: ' + this.state.productSelected['name']}</h4>
          </div>
        </Card.Grid>
      </Col>
      <Col span={12}>
        <Card.Grid style={gridStyle}>
          <ProductInfo 
            name={this.state.productSelected['name']} 
            productCode = "FM-test01"
            // productCode= {this.state.productSelected.productCode} 
            // price= {this.state.productSelected.price}
            price= "2.000.000"
            // inStock= {this.state.productSelected.inStock}
            inStock= "15"
            />
        </Card.Grid>
      </Col>
      </Row>
      </Card>
    )
  }
} 