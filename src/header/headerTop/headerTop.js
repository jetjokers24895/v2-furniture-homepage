import React, {Component} from 'react';
import * as text from '../../model/setting';
import './headerTop.css';
import {Row,Col} from 'antd';



class headerTop extends Component {
  render() {
    return (
          <div className="header-top">
            <Row>
              <Col span={8}>
                <p className= "text-header-top"><span className= "nav-icon fa fa-shipping-fast"></span>{text.captionShip}</p>
              </Col>
              <Col span={9}></Col>
              <Col span={2}>
                <a className="text-header-top" href="#"><i className= "nav-icon fa fa-dollar-sign"></i>{text.textBusiness}</a>
              </Col>
              <Col span={2}>
                <a className="text-header-top" href="#"><i className= "fa fa-box nav-icon"></i>{text.textOrder}</a>
              </Col>
              <Col span={3}>
                <a className="text-header-top" href="#"> <i className= "fa fa-dollar-sign nav-icon"></i>{text.textCheckOrder}</a>
              </Col>
            </Row>
          </div>
          
    )
  }
};
export default headerTop;

// <div className= "row header-top">
            
          //     <div className="col-md-4">
          //         <div className = "caption-ship">
          //           <ul className="nav">
          //             <li className="nav-item"><p className= "text-header-top align-middle"><span className= "nav-icon fa fa-shipping-fast"></span>{text.captionShip}</p></li>
          //           </ul>
          //         </div>
          //     </div>

          //     <div className="col-md-8">
          //     <div className ="other-page">
              
          //       <ul className="nav justify-content-end">
          //         <li className="nav-item">
          //           <a className="nav-link text-header-top" href="#"><i className= "nav-icon fa fa-dollar-sign"></i>{text.textBusiness}</a>
          //         </li>
          //         <li className="nav-item">
          //           <a className="nav-link text-header-top" href="#"><i className= "fa fa-box nav-icon"></i>{text.textOrder}</a>
          //         </li>
                  
          //         <li className="nav-item">
          //           <a className="nav-link text-header-top" href="#"> <i className= "fa fa-dollar-sign nav-icon"></i>{text.textCheckOrder}</a>
          //         </li>
          //       </ul>
          //     </div>
          //     </div>
    
          // </div>