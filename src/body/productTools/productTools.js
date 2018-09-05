import React,{ Component } from "react";
import { Row, Col, Select,Radio } from 'antd';
import './productTools.css';
import * as setting from './../../model/setting';

const Option= Select.Option;

export default class ProductTools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listComponent: [{
        name:'component1'},
        {name:'component2'},
        {name:'component3'}
      ],
      listMaterial: [
        {name:'Vải'},
        {name:'Gỗ'}
      ]
    }
  }
  makeOptions = (listData)=>{
    return listData.map((data)=>{
      return (<Option value= {data['name']}>{data['name']}</Option>)
    })
  }

  render() {
    return(
      <Row className= "product-tools">
        <Col span={6} className= "filter-component">
          <Row>
            <Select
                mode="multiple"
                placeholder={setting.filterComponentText}
                style={{ width: '50%' }}
       
            >
              {this.makeOptions(this.state.listComponent)}
            </Select>
            <span className="product-tools-icon fa fa-plus"></span>
          </Row>
        </Col>
        <Col span={6} className= "filter-material">
          <Select
                mode="multiple"
                placeholder={setting.filterMaterialText}
                style={{ width: '50%' }}
       
            >
              {this.makeOptions(this.state.listMaterial)}
            </Select>
            <span className="fa fa-plus"></span>
        </Col>
        <Col span={6} className= "arrange">
          <Select defaultValue="asc" style={{ width: '80%' }}>
            <Option value="asc">{setting.filterArrangeText[0]}</Option>
            <Option value="desc">{setting.filterArrangeText[1]}</Option>
          </Select>
        </Col>
      </Row>
    )
  }
}
