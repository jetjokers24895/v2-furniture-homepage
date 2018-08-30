import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import HeaderTop from './headerTop/headerTop';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../node_modules/@fortawesome/fontawesome-free/js/all';

// ReactDOM.render(<App/>, document.getElementById('root'));
ReactDOM.render(<HeaderTop/>, document.getElementById('header-top'))
registerServiceWorker();
