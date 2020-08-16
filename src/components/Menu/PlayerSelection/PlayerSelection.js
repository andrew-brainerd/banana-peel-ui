import React, { useState } from 'react';
import { func } from 'prop-types';
import { SMS_INVITE, EMAIL_INVITE } from '../../../constants/game';
import TextInput from '../../common/TextInput/TextInput';
import styles from './PlayerSelection.module.scss';
import Button from '../../common/Button/Button';

const PlayerSelection = ({ sendInvite, createVersusGame }) => {
  const [selectedInviteType, setSelectedInviteType] = useState(SMS_INVITE);
  const [inviteTo, setInviteTo] = useState('');
  const [hasSentInvite, setHasSentInvite] = useState(false);

  return (
    <div className={styles.playerSelection}>
      <div className={styles.inviteContainer}>
        <TextInput
          placeholder={selectedInviteType === SMS_INVITE ? 'Phone Number' : 'Email Address'}
          value={inviteTo}
          onChange={setInviteTo}
        />
        <div className={styles.inviteTypeContainer} style={{ display: 'none' }}>
          <div
            className={[
              styles.inviteType,
              selectedInviteType === SMS_INVITE ? styles.selected : ''
            ].join(' ')}
            onClick={() => setSelectedInviteType(SMS_INVITE)}
          >
            SMS
          </div>
          <div
            className={[
              styles.inviteType,
              selectedInviteType === EMAIL_INVITE ? styles.selected : ''
            ].join(' ')}
            onClick={() => setSelectedInviteType(EMAIL_INVITE)}
          >
            EMAIL
          </div>
        </div>
      </div>
      <div className={styles.controlButtons}>
        <Button
          className={styles.button}
          text='Send Invite'
          onClick={() => {
            sendInvite(inviteTo);
            setHasSentInvite(true);
          }}
          disabled={inviteTo === ''}
        />
        <Button
          className={styles.button}
          text='Start Game'
          disabled={!hasSentInvite}
        />
      </div>
    </div>
  );
};

PlayerSelection.propTypes = {
  sendInvite: func.isRequired,
  createVersusGame: func.isRequired
};

export default PlayerSelection;
