import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const x = <h1 className="myClass" id='myID' xxx="test">Mahbub</h1>
console.log(x.props.xxx);
ReactDOM.render( <App /> , document.getElementById('root'));