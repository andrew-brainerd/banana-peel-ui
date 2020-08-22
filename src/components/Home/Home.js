import React from 'react';
import { bool } from 'prop-types';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from '../common/Loading/Loading';
import UserSearch from '../UserSearch/container';
import logo from '../../img/logo.png';
import styles from './Home.module.scss';

const Home = ({ isLoadingUser }) => {
  const { isLoading } = useAuth0();

  return isLoading || isLoadingUser ? <Loading isActive /> : (
    <div className={styles.home}>
      <div className={styles.pageHeader}>
        <img src={logo} alt='Banana Peel Logo' />
      </div>
      <UserSearch />
    </div>
  );
};

Home.propTypes = {
  isLoadingUser: bool
};

export default Home;
