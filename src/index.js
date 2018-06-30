import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const renderApp = (Component) => {
  render(<Component />, document.getElementById('root'));
};

renderApp(App);

registerServiceWorker();

// HMR
if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp(App);
  });
}
