import React, { useState, useEffect } from 'react';
import { string, shape, array, func } from 'prop-types';
import Actions from './Actions/Actions';
import Overall from './Overall/Overall';
import styles from './GameStats.module.scss';

const ACTIONS_VIEW = 'Actions';
const OVERALL_VIEW = 'Overall';

const views = [ACTIONS_VIEW, OVERALL_VIEW];

const GameStats = ({ gameId, stats, loadGame }) => {
  const [selectedView, setSelectedView] = useState(OVERALL_VIEW);

  console.log(stats);

  useEffect(() => {
    gameId && loadGame(gameId);
  }, [gameId, loadGame]);

  return stats ? (
    <>
      <div className={styles.viewSelector}>
        {views.map(view =>
          <div
            key={view}
            className={[
              styles.view,
              view === selectedView ? styles.selected : ''
            ].join(' ')}
            onClick={e => {
              e.stopPropagation();
              setSelectedView(view);
            }}
          >
            {view}
          </div>)
        }
      </div>
      <div className={styles.gameStats}>
        <div className={styles.stageFiller}>Stage</div>
        <div className={styles.player1}>
          {selectedView === ACTIONS_VIEW && <Actions player={stats.actionCounts[0]} />}
          {selectedView === OVERALL_VIEW && <Overall player={stats.overall[0]} />}
        </div>
        <div className={styles.filler}>VS</div>
        <div className={styles.player2}>
          {selectedView === ACTIONS_VIEW && <Actions player={stats.actionCounts[1]} />}
          {selectedView === OVERALL_VIEW && <Overall player={stats.overall[1]} />}
        </div>
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
