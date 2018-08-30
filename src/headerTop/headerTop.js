import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import * as text from '../model/setting';
import './headerTop.css';



class headerTop extends Component {
  render() {
    return (
          <div className= "row header-top">
            
              <div className="col-md-4">
                  <div className = "caption-ship">
                    <ul className="nav">
                      <li className="nav-item"><p className= "text-header-top align-middle"><span className= "nav-icon fa fa-shipping-fast"></span>{text.captionShip}</p></li>
                    </ul>
                  </div>
              </div>

              <div className="col-md-8">
              <div className ="other-page">
              
                <ul class="nav justify-content-end">
                  <li class="nav-item">
                    <a class="nav-link text-header-top" href="#"><i className= "nav-icon fa fa-dollar-sign"></i>{text.textBusiness}</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-header-top" href="#"><i className= "fa fa-box nav-icon"></i>{text.textOrder}</a>
                  </li>
                  
                  <li class="nav-item">
                    <a class="nav-link text-header-top" href="#"> <i className= "fa fa-dollar-sign nav-icon"></i>{text.textCheckOrder}</a>
                  </li>
                </ul>
              </div>
              </div>
    
          </div>
    )
  }
};
export default headerTop;