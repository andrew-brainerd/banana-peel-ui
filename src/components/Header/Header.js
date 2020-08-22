import React, { useState, useEffect, useRef } from 'react';
import { shape, string, func } from 'prop-types';
import { useAuth0 } from '@auth0/auth0-react';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import Button from '../common/Button/Button';
import styles from './Header.module.scss';

const Header = ({ currentUser, setCurrentUser }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, loginWithRedirect, logout, isLoading, user } = useAuth0();
  const menuRef = useRef();

  useEffect(() => {
    user && setCurrentUser(user);
  }, [user, setCurrentUser]);

  useOnClickOutside(menuRef, () => setIsMenuOpen(false));

  return (
    <>
      <div className={styles.header}>
        <div
          name={'menu'}
          className={styles.menuIcon}
          onClick={() => isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)}
        >
          |||
        </div>
        <div className={styles.player}>{(currentUser || {}).username}</div>
      </div>
      {isMenuOpen &&
        <div className={styles.headerMenu} ref={menuRef}>
          {!isAuthenticated && (
            <Button
              name={'signIn'}
              className={styles.menuButton}
              text={isLoading ? 'Loading...' : 'Sign In'}
              onClick={() => !isLoading && loginWithRedirect()}
            />
          )}
          {isAuthenticated && (
            <Button
              className={styles.menuButton}
              text={'Sign Out'}
              onClick={() => logout()}
            />
          )}
        </div>
      }
    </>
  );
};

Header.propTypes = {
  currentUser: shape({
    username: string
  }),
  setCurrentUser: func.isRequired
};

export default Header;
