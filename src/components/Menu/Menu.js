import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from '../common/Loading/Loading';
import PlayerGames from './PlayerGames/container';
import styles from './Menu.module.scss';

const Menu = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  return !isAuthenticated || isLoading ? <Loading isActive /> : (
    <div className={styles.menu}>
      <h1>Banana Peel</h1>
      <PlayerGames />
    </div>
  );
};

export default Menu;
