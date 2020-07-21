import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const appId = '__chrome_extension_md_slide__';

if (!document.getElementById(appId)) {
  const appRoot = document.createElement('div');
  appRoot.setAttribute('id', appId);
  document.body.appendChild(appRoot);
  ReactDOM.render(<App />, appRoot);
}
