import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const settings = {
  count: 4,
};

ReactDOM.render(
  <React.StrictMode>
    <App count={settings.count} />
  </React.StrictMode>,
  document.getElementById('root'));
