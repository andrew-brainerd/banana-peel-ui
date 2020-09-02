import React, { useEffect } from 'react';
import { string, shape, array, object, number, func } from 'prop-types';
import moment from 'moment';
import isValidGameId from '../../utils/isValidGameId';
import stageMap from '../../constants/stages';
import Icon from '../common/Icon/Icon';
import Metadata from './Metadata/container';
import Actions from './Actions/Actions';
import Overall from './Overall/Overall';
import styles from './GameStats.module.scss';

const GameStats = ({ gameId, stats, metadata, stageId, loadGame }) => {
  useEffect(() => {
    isValidGameId(gameId) && loadGame(gameId);
  }, [gameId, loadGame]);

  return stats ? (
    <div className={styles.game}>
      <div className={styles.contentHeader}>
        {moment(metadata.startAt).format('MM/DD/YYYY')}
        <span className={styles.time}>{moment(metadata.startAt).format('h:mm:ss a')}</span>
      </div>
      <div className={styles.content}>
        <Icon className={styles.stage} name={(stageMap[stageId] || {}).icon || 'default_stage'} />
        <div className={styles.stageName}>{(stageMap[stageId] || {}).name || stageId}</div>
      </div>
      <div className={styles.gameStats}>
        <div className={styles.statContainer}>
          <Metadata playerNum={0} metadata={metadata} />
          <Overall player={stats.overall[0]} />
          <Actions player={stats.actionCounts[0]} />
        </div>
        <div className={styles.statContainer}>
          <Metadata playerNum={1} metadata={metadata} />
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
  metadata: object,
  stageId: number,
  loadGame: func.isRequired
};

export default GameStats;
