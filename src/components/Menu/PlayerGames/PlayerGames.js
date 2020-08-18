import React, { useEffect } from 'react';
import { string, bool, arrayOf, shape, func } from 'prop-types';
import moment from 'moment';
import { useAuth0 } from '@auth0/auth0-react';
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
          const player1Character = metadata.players[0].characters;
          const player2Character = metadata.players[1].characters;

          console.log(game);
          return (
            <div key={game._id} className={styles.game}>
              <div className={styles.metadata}>
                <div className={styles.stat}>
                  <span className={styles.label}>Frames: </span>
                  {metadata.lastFrame}
                </div>
                <div className={styles.stat}>
                  <span className={styles.label}>Played On: </span>
                  {metadata.playedOn}
                </div>
                <div className={styles.stat}>
                  <span className={styles.label}>Started At: </span>
                  {moment(metadata.startAt).format('MM/DD/YYYY h:mm:ss a')}
                </div>
                <div className={styles.stat}>
                  {Object.keys(player1Character).map(char => (
                    <span key={char}>
                      <span className={styles.label}>
                        Player 1 Character:
                      </span> [{char}: {player1Character[char]}]
                    </span>
                  ))}
                </div>
                <div className={styles.stat}>
                  {Object.keys(player2Character).map(char => (
                    <span key={char}>
                      <span className={styles.label}>
                        Player 2 Character:
                      </span> [{char}: {player2Character[char]}]
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
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
