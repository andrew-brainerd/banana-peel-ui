import React from 'react';
import { shape, number } from 'prop-types';
import styles from './Actions.module.scss';

const Actions = ({ player }) => {
  return (
    <div className={styles.actionContainer}>
      <div className={styles.actionHeader}>Actions for Player {player.playerIndex + 1}</div>
      <div className={styles.actionContent}>
        <div className={styles.stat}>
          <span className={styles.label}>Air Dodges:</span>
          {player.airDodgeCount}
        </div>
        <div className={styles.stat}>
          <span className={styles.label}>Dash Dances:</span>
          {player.dashDanceCount}
        </div>
        <div className={styles.stat}>
          <span className={styles.label}>Ledge Grabs:</span>
          {player.ledgegrabCount}
        </div>
        <div className={styles.stat}>
          <span className={styles.label}>Rolls:</span>
          {player.rollCount}
        </div>
        <div className={styles.stat}>
          <span className={styles.label}>Spot Dodges:</span>
          {player.spotDodgeCount}
        </div>
        <div className={styles.stat}>
          <span className={styles.label}>Wave Dashes:</span>
          {player.wavedashCount}
        </div>
        <div className={styles.stat}>
          <span className={styles.label}>Wave Lands:</span>
          {player.wavelandCount}
        </div>
      </div>
    </div>
  );
};

Actions.propTypes = {
  player: shape({
    airDodgeCount: number,
    dashDanceCount: number,
    ledgegrabCount: number,
    rollCount: number,
    spotDodgeCount: number,
    wavedashCount: number,
    wavelandCount: number
  })
};

export default Actions;
