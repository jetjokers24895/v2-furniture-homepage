import React, { Component} from "react";
import { Row, Col, Carousel } from "antd";
import "./slideCategory.css";
import * as settings from "../../model/setting";

class SlideCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modelSelected: "amchair"
    };
  }
  
  divs = () => {
    let divs = [];
    let menuImages = settings.listMenuImage;
    let numberInt = parseInt(Object.keys(menuImages).length / 8);
    let numberAdd = Object.keys(menuImages).length % 8;
    let quickDataStore = {};
    let quickAddDatastore = [];
    for (let i = 1; i <= numberInt; i++) {
      quickDataStore[i - 1] = [];
      for (let n = divs.length; n < i * 8; n++) {
        quickDataStore[i - 1].push(
          <Col span={3} key={"div" + n.toString()}>
            <div className={"menu-tab-" + n.toString()} >
              {Object.values(menuImages)[n]}
            </div>
          </Col>
        );
      }
      // divs.push(<div key= {"img-menu" + i.toString()} className={"slide" + i.toString()}>{quickDataStore[i-1]}</div>)
      divs.push(<Row key={"slide"+ i.toString()}>{quickDataStore[i - 1]}</Row>);
    }
    if (numberAdd !== 0) {
      for (let add = divs.length; add < Object.keys(menuImages).length; add++) {
        quickAddDatastore.push(
          <Col span={3} key={"div" + add.toString()}>
            <div className={"menu-tab-" + add.toString()}>
              {Object.values(menuImages)[add]}
            </div>
          </Col>
        );
      }
      divs.push(<Row key={"slide" + (numberInt+1).toString()}>{quickAddDatastore}</Row>);
    }
    return divs;
  };

  render() {
    return <Carousel>{this.divs()}</Carousel>;
  }
}

export default SlideCategory;
