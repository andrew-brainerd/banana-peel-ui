import React, { useState } from 'react';
import { bool, func } from 'prop-types';
import TextInput from '../common/TextInput/TextInput';
import Loading from '../common/Loading/Loading';
import Button from '../common/Button/Button';
import styles from './NewUser.module.scss';

const NewUser = ({ isCheckingUsername, isUsernameAvailable, checkUsername, createUser }) => {
  const [username, setUsername] = useState('');

  return (
    <div className={styles.newUser}>
      <h1>Welcome to Banana Peel</h1>
      <h3>Choose a username (use your Netplay ID here)</h3>
      <TextInput
        placeholder='Enter a username'
        onChange={value => {
          setUsername(value);
          checkUsername(value);
        }}
        value={username}
        autofocus
      />
      {isCheckingUsername && <Loading isActive />}
      {username !== '' && !isCheckingUsername &&
        <h4>{`${username} is ${isUsernameAvailable ? '' : 'not'} available`}</h4>
      }
      <Button
        className={styles.createButton}
        text='Create'
        onClick={() => createUser(username)}
        disabled={username === '' || !isUsernameAvailable}
      />
    </div>
  );
};

NewUser.propTypes = {
  isCheckingUsername: bool,
  isUsernameAvailable: bool,
  checkUsername: func.isRequired,
  createUser: func.isRequired
};

export default NewUser;
