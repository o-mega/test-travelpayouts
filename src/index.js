import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import './styles/styles.scss';
import App from './root';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('webapp'),
  )
}

render(App);

if (module.hot) {
  module.hot.accept('./root', () => {
    render(App);
  })
}
