import React, { useEffect } from 'react';
import { string, shape, array, func } from 'prop-types';
import Actions from './Actions/Actions';
import Overall from './Overall/Overall';
import styles from './GameStats.module.scss';

const GameStats = ({ gameId, stats, loadGame }) => {
  console.log(stats);

  useEffect(() => {
    gameId && loadGame(gameId);
  }, [gameId, loadGame]);

  return stats ? (
    <>
      <div className={styles.statContainer}>
        <Overall player={stats.overall[0]} />
        <Overall player={stats.overall[1]} />
      </div>
      <div className={styles.statContainer}>
        <Actions player={stats.actionCounts[0]} />
        <Actions player={stats.actionCounts[1]} />
      </div>
    </>
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
