import React from 'react';
import { shape, number } from 'prop-types';
import styles from './Overall.module.scss';

const Overall = ({ player }) => {
  return (
    <div className={styles.overallContainer}>
      <div className={styles.overallHeader}>Overall for Player {player.playerIndex + 1}</div>
      <div className={styles.overallContent}>
        <div className={styles.stat}>
          <span className={styles.label}>Total Damage:</span>
          {Math.round(player.totalDamage)}
        </div>
        <div className={styles.stat}>
          <span className={styles.label}>Kill Count:</span>
          {player.killCount}
        </div>
        <div className={styles.stat}>
          <span className={styles.label}>Conversions:</span>
          {player.conversionCount}
        </div>
        <div className={styles.stat}>
          <span className={styles.label}>Inputs:</span>
          {player.inputCount}
        </div>
      </div>
    </div>
  );
};

Overall.propTypes = {
  player: shape({
    totalDamage: number,
    killCount: number,
    conversionCount: number,
    inputCount: number
  })
};

export default Overall;
