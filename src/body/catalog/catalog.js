import React, {Component} from 'react';
import {Row, Col, Card} from 'antd';
import './catalog.css';
import * as $ from 'jquery';
import * as settings from '../../model/setting';


const {Meta} = Card

export default class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productCatalog : {},
      modelName: 'Armchair'
    }
  }

  componentDidMount() {
    var that = this
    var urlToGet = settings.baseUrl + '/producttype' +'?name=' +this.state.modelName;
    // http://v2-api.furnituremaker.vn/producttype?name=Armchair
    console.log('urlToget',urlToGet);
    $.get('urlToget',function(data){
      console.log(data)
    })
  }

  render() {
    return(
      <Row>
        <Col span={8}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="../../image/1.png" />}
            >
            <Meta
              title="Europe Street beat"
              description="www.instagram.com"
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="../../image/1.png" />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="../../image/1.png" />}
            >
            <Meta
              title="Europe Street beat"
              description="www.instagram.com"
            />
          </Card>,
        </Col>
      </Row>
    )
  }
}