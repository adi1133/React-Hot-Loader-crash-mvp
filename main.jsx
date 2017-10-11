import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import SwapMe from './swap-me';

function render(Component) {
  ReactDOM.render(
    <AppContainer>
        <Component />
    </AppContainer>,
    document.getElementById('app'),
  );
}

render(SwapMe);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./swap-me', () => { render(SwapMe); });
}
