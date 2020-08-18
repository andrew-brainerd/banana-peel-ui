import React, { useState } from 'react';
import { func } from 'prop-types';
import TextInput from '../common/TextInput/TextInput';
import { PLAYER_GAMES_ROUTE } from '../../constants/routes';
import styles from './UserSearch.module.scss';

const UserSearch = ({ navTo }) => {
  const [username, setUsername] = useState('Sp1d3rM0nk3y');

  return (
    <div className={styles.userSearch}>
      <TextInput
        className={styles.userInputContainer}
        inputClassName={styles.userInput}
        placeholder='Enter a username'
        onChange={setUsername}
        value={username}
        onPressEnter={() => navTo(PLAYER_GAMES_ROUTE.replace(':username', username))}
        autofocus
      />
    </div>
  );
};

UserSearch.propTypes = {
  navTo: func.isRequired
};

export default UserSearch;
