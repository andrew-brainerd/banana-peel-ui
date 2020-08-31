import React from 'react';
import { object } from 'prop-types';
import { Auth0Provider } from '@auth0/auth0-react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { HOME_ROUTE, PLAYER_GAMES_ROUTE, NEW_USER_ROUTE, GAME_STATS_ROUTE } from '../../constants/routes';
import Home from '../Home/container';
import PlayerGames from '../PlayerGames/container';
import GameStats from '../GameStats/container';
import NewUser from '../NewUser/container';
import styles from './App.module.scss';

const App = ({ history }) => {
  return (
    <div className={styles.app}>
      <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN}
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
        redirectUri={window.location.origin}
        onRedirectCallback={appState =>
          history.push(appState && appState.targetUrl ? appState.targetUrl : window.location.pathname)
        }>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path={HOME_ROUTE} exact component={Home} />
            <Route path={PLAYER_GAMES_ROUTE} exact component={PlayerGames} />
            <Route path={GAME_STATS_ROUTE} exact component={GameStats} />
            <Route path={NEW_USER_ROUTE} exact component={NewUser} />
          </Switch>
        </ConnectedRouter>
      </Auth0Provider>
      {/* <div className={styles.attribution}>
        Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a
          href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
      </div> */}
    </div>
  );
};

App.propTypes = {
  history: object.isRequired
};

export default App;
