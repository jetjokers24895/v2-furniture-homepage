import React,{ Component } from "react";
import { Row, Col,Card} from 'antd';
import './productSelected.css';
import * as setting from './../../model/setting';
import * as $ from 'jquery';
import ProductInfo from './productInfo/productInfo';

const gridStyle = {
  width: '80%',
  textAlign: 'center',
};


export default class ProductSelected extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      productSelected : {
        name: 'Arm Chair',
        price: '200',
        materialType:'Vải',
        image: "https://sw001.hstatic.net/7/15a221a5b157d1/comeback-1.jpg",
        inStock: 15,
        productCode:'Fm12asd123'
      },
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
          <img src = {this.state.productSelected.image}/>
          <div className="text-block">
          <h4>{'Name of Design: ' + this.state.productSelected.productCode}</h4>
          </div>
        </Card.Grid>
      </Col>
      <Col span={12}>
        <Card.Grid style={gridStyle}>
          <ProductInfo 
            name={this.state.productSelected.name} 
            productCode= {this.state.productSelected.productCode} 
            price= {this.state.productSelected.price} 
            inStock= {this.state.productSelected.inStock}
            />
        </Card.Grid>
      </Col>
      </Row>
      </Card>
    )
  }
} 