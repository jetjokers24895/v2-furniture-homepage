import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../node_modules/@fortawesome/fontawesome-free/js/all';
import registerServiceWorker from './registerServiceWorker';

import HeaderTop from './header/headerTop/headerTop';
import HeaderBottom from './header/headerBottom/headerBottom';
import BodyCaption from './body/bodyCaption/bodyCaption';
import SlideCategory from './body/slideCategory/slideCategory';
import SlideBanner from './body/slideBanner/slideBanner';
import Indexing from './body/indexing/indexing';
import ProductTools from './body/productTools/productTools';
import ProductSelected from './body/productSelected/productSelected';
import Catalog from './body/catalog/catalog'


const listComponent = []
// ReactDOM.render(<App/>, document.getElementById('root'));
ReactDOM.render(<HeaderTop/>, document.getElementById('header-top'));
ReactDOM.render(<HeaderBottom/>, document.getElementById('header-bottom'));
ReactDOM.render(<BodyCaption/>, document.getElementById('body-text'))
ReactDOM.render(<SlideCategory/>, document.getElementById('slide-category'))
ReactDOM.render(<SlideBanner/>, document.getElementById('slide-banner'))
ReactDOM.render(<Indexing category="Amchair" design="Aster"/>, document.getElementById('indexing'))
ReactDOM.render(<ProductTools />, document.getElementById('product-tools'))
ReactDOM.render(<ProductSelected/>, document.getElementById('product-selected'))
ReactDOM.render(<Catalog/>,document.getElementById('catalog'))
registerServiceWorker();
