import React, { useState } from 'react';
import { shape, array } from 'prop-types';
import Actions from './Actions/Actions';
import Overall from './Overall/Overall';
import styles from './GameStats.module.scss';

const ACTIONS_VIEW = 'Actions';
const OVERALL_VIEW = 'Overall';

const views = [ACTIONS_VIEW, OVERALL_VIEW];

const GameStats = ({ stats }) => {
  const [selectedView, setSelectedView] = useState(OVERALL_VIEW);

  return (
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
