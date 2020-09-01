import React, { useEffect } from 'react';
import { string, shape, array, func } from 'prop-types';
import isValidGameId from '../../utils/isValidGameId';
import Metadata from './Metadata/container';
import Actions from './Actions/Actions';
import Overall from './Overall/Overall';
import styles from './GameStats.module.scss';

const GameStats = ({ gameId, stats, loadGame }) => {
  useEffect(() => {
    isValidGameId(gameId) && loadGame(gameId);
  }, [gameId, loadGame]);

  return stats ? (
    <div className={styles.gameStats}>
      <div className={styles.statContainer}>
        <Metadata player={'Player 1'} />
        <Overall player={stats.overall[0]} />
        <Actions player={stats.actionCounts[0]} />
      </div>
      <div className={styles.statContainer}>
        <Metadata player={'Player 2'} />
        <Overall player={stats.overall[1]} />
        <Actions player={stats.actionCounts[1]} />
      </div>
    </div>
  ) : null;
};

GameStats.propTypes = {
  gameId: string,
  stats: shape({
    actionCounts: array,
    combos: array,
    conversions: array,
    overall: array,
    stocks: array
  }),
  loadGame: func.isRequired
};

export default GameStats;
