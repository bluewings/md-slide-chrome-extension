import React from 'react';
import ReactDOM from 'react-dom';
import Slide from './Slide';
import './styles/index.scss';

const root = document.createElement('span');
document.body.appendChild(root);

ReactDOM.render(<Slide />, root);
