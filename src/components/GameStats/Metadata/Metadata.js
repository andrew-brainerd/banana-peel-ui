import React from 'react';
import { string } from 'prop-types';
import styles from './Metadata.module.scss';

const Metadata = ({ player }) => {
  return (
    <div className={styles.metadataContainer}>
      <div className={styles.metadataHeader}>{player}</div>
      <div className={styles.metadataContent}>
      </div>
    </div>
  );
};

Metadata.propTypes = {
  player: string
};

export default Metadata;
