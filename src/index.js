import React from 'react';
import WebFont from 'webfontloader';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore, { history, sagaMiddleware } from './store/configureStore';
import { playerGamesWatcher } from './sagas/game';
import App from './components/App/App';
import './index.scss';

WebFont.load({
  google: {
    families: [
      'Exo 2: 400',
      'Chilanka: 400'
    ]
  }
});

const store = configureStore();

sagaMiddleware.run(playerGamesWatcher);

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);
