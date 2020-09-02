import React from 'react';
import { number, object } from 'prop-types';
import characterMap from '../../../constants/characters';
import Icon from '../../common/Icon/Icon';
import styles from './Metadata.module.scss';

const Metadata = ({ playerNum, metadata }) => {
  const player = metadata.players[playerNum];

  return (
    <div className={styles.metadataContainer}>
      <div className={styles.metadataHeader}>Player {playerNum + 1}</div>
      <div className={styles.metadataContent}>
        <div className={styles.character}>
          <div className={styles.playerName}>{player.names.netplay || 'P1'}</div>
          {Object.keys(player.characters).map((char, i) => i === 0 && (
            <span key={char}>
              <Icon name={characterMap[char].icon || 'default_character'} />
              <div className={styles.characterName}>{characterMap[char].name || char}</div>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

Metadata.propTypes = {
  playerNum: number,
  metadata: object
};

export default Metadata;
