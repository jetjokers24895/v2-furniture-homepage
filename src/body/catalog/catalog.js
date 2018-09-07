import React, { Component } from "react";
import { Row, Col, Card } from "antd";
import "./catalog.css";
import * as $ from "jquery";
import * as settings from "../../model/setting";
import ReactDOM from 'react-dom';
import { stat } from "fs";
const { Meta } = Card;


var  catalogThis;

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productCatalog: {},
      modelName: "Armchair",
      productSelected: null
    };
    catalogThis = this;
    console.log(catalogThis);
  }

  updateProductSelected(index) {
    this.setState({productSelected: this.state.productCatalog[index]})
    console.log(this.state.productSelected);
  }


  componentDidMount() {
    var that = this;
    var urlToGet =settings.urlBase + "/producttype" + "?name=" + this.state.modelName;
    // http://v2-api.furnituremaker.vn/producttype?name=Armchair
    $.get(urlToGet, function(data) {
      var id = data[0].id;
      var urlToGetDesigns = settings.urlBase + "/design?productType=" + id;
      $.get(urlToGetDesigns, data => {
        that.setState({productCatalog: data});
        that.generateHtml(data);
      });

    });
  }


  generateHtml = (products) => {
    let cols = [];
    for (var index in products) {
      cols.push(
        <Col key={products[index]['id']} span={8}>
          <Card
            onClick={this.updateProductSelected.bind(this,index)}
            hoverable
            style={{ width: "60%", margin:"0 auto"}}
            cover={<img alt="example" src={settings.urlBase + products[index]['thumbnail']['url']} />}
          >
            <Meta  description={products[index]['name']} />
          </Card>
        </Col>
      );
    }
    ReactDOM.render(cols,document.getElementById('products'))
  };

  render() {
    return(
      <Row id="products">
      </Row>  
    ) 
  }
}

export {Catalog,catalogThis}; 

