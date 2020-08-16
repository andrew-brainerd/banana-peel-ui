import React from 'react';
import { object } from 'prop-types';
import { Auth0Provider } from '@auth0/auth0-react';
import { isMobile } from 'react-device-detect';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { MENU_ROUTE } from '../../constants/routes';
import Header from '../Header/container';
import Menu from '../Menu/Menu';
import styles from './App.module.scss';

const App = ({ history }) => {
  return (
    <div className={[styles.app, !isMobile ? styles.desktop : ''].join(' ')}>
      <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN}
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
        redirectUri={window.location.origin}
        onRedirectCallback={appState =>
          history.push(appState && appState.targetUrl ? appState.targetUrl : window.location.pathname)
        }>
        <ConnectedRouter history={history}>
          <Header />
          <Switch>
            <Route path={MENU_ROUTE} exact component={Menu} />
          </Switch>
        </ConnectedRouter>
      </Auth0Provider>
    </div>
  );
};

App.propTypes = {
  history: object.isRequired
};

export default App;
