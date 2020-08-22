import React, { useState, useEffect, useRef } from 'react';
import { shape, string, func } from 'prop-types';
import { useAuth0 } from '@auth0/auth0-react';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import Button from '../common/Button/Button';
import styles from './Header.module.scss';
import { PLAYER_GAMES_ROUTE } from '../../constants/routes';

const Header = ({ currentUser, setCurrentUser, navTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, loginWithRedirect, logout, isLoading, user } = useAuth0();
  const menuRef = useRef();
  const username = (currentUser || {}).username;

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
        <div className={styles.player}>{username}</div>
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
            <>
              <Button
                className={styles.menuButton}
                text='My Games'
                onClick={() => navTo(PLAYER_GAMES_ROUTE.replace(':username', username))}
              />
              <Button
                className={styles.menuButton}
                text='Sign Out'
                onClick={() => logout()}
              />
            </>
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
  setCurrentUser: func.isRequired,
  navTo: func.isRequired
};

export default Header;
