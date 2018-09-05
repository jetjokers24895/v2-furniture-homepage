import React, {Component} from 'react';
import {Row,Col,Carousel} from 'antd';
import './slideBanner.css';
import * as settings from '../../model/setting';

export default class SlideBanner extends Component  {
  divs = ()=>{
    let bannerImages = settings.listBannerImage.slice();
    let divs = bannerImages.map((banner)=>{
      return (<div>{banner}</div>)
    })
    console.log(divs);
    return divs
  } 

  render() {
   return (
     <Carousel autoplay>
       
         {this.divs()}
       
     </Carousel>
   )
 }
}