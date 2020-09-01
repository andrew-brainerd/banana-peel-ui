import React, { useEffect } from 'react';
import { string, shape, array, number, func } from 'prop-types';
import isValidGameId from '../../utils/isValidGameId';
import stageMap from '../../constants/stages';
import Icon from '../common/Icon/Icon';
import Metadata from './Metadata/container';
import Actions from './Actions/Actions';
import Overall from './Overall/Overall';
import styles from './GameStats.module.scss';

const GameStats = ({ gameId, stats, stageId, loadGame }) => {
  useEffect(() => {
    isValidGameId(gameId) && loadGame(gameId);
  }, [gameId, loadGame]);

  return stats ? (
    <div className={styles.game}>
      <div className={styles.stageHeader}>
        <div className={styles.stageName}>{(stageMap[stageId] || {}).name || stageId}</div>
      </div>
      <div className={styles.stageData}>
        <Icon className={styles.stage} name={(stageMap[stageId] || {}).icon || 'default_stage'} />
      </div>
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
  stageId: number,
  loadGame: func.isRequired
};

export default GameStats;
