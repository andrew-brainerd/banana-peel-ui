import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from '../common/Loading/Loading';
import UserSearch from '../UserSearch/container';
import logo from '../../img/logo.png';
import styles from './Menu.module.scss';

const Menu = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  return !isAuthenticated || isLoading ? <Loading isActive /> : (
    <div className={styles.menu}>
      <div className={styles.pageHeader}>
        <img src={logo} alt='Banana Peel Logo' />
      </div>
      <UserSearch />
    </div>
  );
};

export default Menu;
