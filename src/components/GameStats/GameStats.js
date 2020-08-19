import React from 'react';
import { shape, array } from 'prop-types';
import Actions from './Actions/Actions';
import styles from './GameStats.module.scss';

const GameStats = ({ stats }) => {
  console.log(stats);

  return (
    <div className={styles.gameStats}>
      <div className={styles.player1}>
        <h3>Player 1</h3>
        <Actions player={stats.actionCounts[0]} />
      </div>
      <div className={styles.player2}>
        <h3>Player 2</h3>
        <Actions player={stats.actionCounts[1]} />
      </div>
    </div>
  );
};

GameStats.propTypes = {
  stats: shape({
    actionCounts: array,
    combos: array,
    conversions: array,
    overall: array,
    stocks: array
  }).isRequired
};

export default GameStats;
