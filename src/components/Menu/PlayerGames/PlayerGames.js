import React, { useEffect } from 'react';
import { string, bool, arrayOf, shape, func } from 'prop-types';
import moment from 'moment';
import { isEmpty } from 'ramda';
import { useAuth0 } from '@auth0/auth0-react';
import characterMap from '../../../constants/characters';
import Loading from '../../common/Loading/Loading';
import styles from './PlayerGames.module.scss';

const PlayerGames = ({ username, isLoadingUser, isLoadingGames, games, loadPlayerGames }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    isAuthenticated && !isLoading && !isLoadingUser && username && loadPlayerGames(username);
  }, [isAuthenticated, isLoading, isLoadingUser, username, loadPlayerGames]);

  return isLoading || isLoadingUser || isLoadingGames ? <Loading isActive /> : (
    <div className={styles.playerGames}>
      <div className={styles.gameContainer}>
        {(games || []).map(game => {
          const metadata = game.metadata;
          const player1 = metadata.players[0];
          const player2 = metadata.players[1];
          const isNetplayGame = !isEmpty(player1.names) && !isEmpty(player2.names);

          isNetplayGame && console.log(game);

          return isNetplayGame ? (
            <div key={game._id} className={[styles.game, isNetplayGame ? styles.netplay : ''].join(' ')}>
              <div className={styles.metadata}>
                <div className={styles.stat}>
                  {Object.keys(player1.characters).map(char => (
                    <span key={char}>
                      <span className={styles.label}>
                        Player 1:
                      </span>
                      {`${player1.names.netplay || 'P1'} as ${characterMap[char] || char}`}
                    </span>
                  ))}
                </div>
                <div className={styles.stat}>
                  {Object.keys(player2.characters).map(char => (
                    <span key={char}>
                      <span className={styles.label}>
                        Player 2:
                      </span>
                      {`${player2.names.netplay || 'P2'} as ${characterMap[char] || char}`}
                    </span>
                  ))}
                </div>
                <div className={styles.stat}>
                  <span className={styles.label}>Started At: </span>
                  {moment(metadata.startAt).format('MM/DD/YYYY h:mm:ss a')}
                </div>
              </div>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};

PlayerGames.propTypes = {
  username: string,
  isLoadingUser: bool,
  isLoadingGames: bool,
  games: arrayOf(shape({
    _id: string,
    createdBy: string,
    type: string,
    currentPlayer: string,
    players: shape({
      player1: string,
      player2: string
    })
  })),
  loadPlayerGames: func.isRequired
};

export default PlayerGames;
