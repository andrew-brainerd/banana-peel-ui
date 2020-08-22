import React, { useEffect, useState } from 'react';
import { string, bool, arrayOf, shape, func } from 'prop-types';
import moment from 'moment';
import { isEmpty } from 'ramda';
import { useAuth0 } from '@auth0/auth0-react';
import stageMap from '../../constants/stages';
import characterMap from '../../constants/characters';
import Loading from '../common/Loading/Loading';
import Icon from '../common/Icon/Icon';
import GameStats from '../GameStats/GameStats';
import styles from './PlayerGames.module.scss';

const PlayerGames = ({ username, isLoadingUser, isLoadingGames, games, loadPlayerGames }) => {
  const { isLoading } = useAuth0();
  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => {
    username && loadPlayerGames(username);
  }, [username, loadPlayerGames]);

  return isLoading || isLoadingUser || isLoadingGames ? <Loading isActive /> : (
    <div className={styles.playerGames}>
      <div className={styles.gameContainer}>
        {(games || []).map(game => {
          const metadata = game.metadata;
          const player1 = metadata.players[0];
          const player2 = metadata.players[1];
          const stage = game.settings.stageId;
          const isNetplayGame = !isEmpty(player1.names) && !isEmpty(player2.names);

          return !isNetplayGame ? (
            <div key={game._id} className={styles.game}>
              <div className={styles.gameHeader}>
                {moment(metadata.startAt).format('MM/DD/YYYY')}
                <span className={styles.time}>{moment(metadata.startAt).format('h:mm:ss a')}</span>
              </div>
              <div
                key={game._id}
                className={[
                  styles.gameContent,
                  isNetplayGame ? styles.netplay : ''
                ].join(' ')}
                onClick={() => selectedGame === game._id ? setSelectedGame(null) : setSelectedGame(game._id)}
              >
                <div className={styles.gameData}>
                  <div className={styles.stageData}>
                    <Icon className={styles.stage} name={(stageMap[stage] || {}).icon || 'default_stage'} />
                    {selectedGame === game._id && console.log(game.settings)}
                    <div className={styles.stageName}>{(stageMap[stage] || {}).name || stage}</div>
                  </div>
                  <div className={styles.character}>
                    <div className={styles.playerName}>{player1.names.netplay || 'P1'}</div>
                    {Object.keys(player1.characters).map((char, i) => i === 0 && (
                      <span key={char}>
                        <Icon name={characterMap[char].icon || 'default_character'} />
                        <div className={styles.characterName}>{characterMap[char].name || char}</div>
                      </span>
                    ))}
                  </div>
                  <div className={styles.versus}>VS</div>
                  <div className={styles.character}>
                    <div className={styles.playerName}>{player2.names.netplay || 'P2'}</div>
                    {Object.keys(player2.characters).map((char, i) => i === 0 && (
                      <span key={char}>
                        <Icon name={characterMap[char].icon || 'default_character'} />
                        <div className={styles.characterName}>{characterMap[char].name || char}</div>
                      </span>
                    ))}
                  </div>
                </div>
                {selectedGame === game._id && <GameStats stats={game.stats} />}
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
