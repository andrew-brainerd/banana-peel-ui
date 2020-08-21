import * as usersApi from '../api/users';
import { navTo } from './routing';
import { NEW_USER_ROUTE, MENU_ROUTE } from '../constants/routes';
import { getCurrentUser } from '../selectors/user';

const PREFIX = 'USERS';

export const LOADING_USER = `${PREFIX}/LOADING_USER`;
export const LOADING_USER_FAILED = `${PREFIX}/LOADING_USER_FAILED`;
export const SET_CURRENT_USER = `${PREFIX}/SET_CURRENT_USER`;
export const LOADING_USERS = `${PREFIX}/LOADING_USERS`;
export const USERS_LOADED = `${PREFIX}/USERS_LOADED`;
export const CHECKING_USERNAME = `${PREFIX}/CHECKING_USERNAME`;
export const USERNAME_CHECKED = `${PREFIX}/USERNAME_CHECKED`;
export const CREATING_USER = `${PREFIX}/CREATING_USER`;

export const loadingUser = { type: LOADING_USER };
export const loadingUserFailed = err => ({ type: LOADING_USER_FAILED, err });
export const loadingUsers = { type: LOADING_USERS };
export const usersLoaded = users => ({ type: USERS_LOADED, users });
export const checkingUsername = { type: CHECKING_USERNAME };
export const usernameChecked = isValid => ({ type: USERNAME_CHECKED, isValid });
export const creatingUser = { type: CREATING_USER };

export const setCurrentUser = user => async dispatch => {
  dispatch(loadingUser);
  usersApi.getUserByEmail(user.email)
    .then(({ doesNotExist, ...userData }) => {
      if (doesNotExist) {
        dispatch(navTo(NEW_USER_ROUTE));
      }
      dispatch({ type: SET_CURRENT_USER, user: { ...user, ...userData } });
    })
    .catch(err => dispatch(loadingUserFailed(err)));
};

export const checkUsername = username => async dispatch => {
  dispatch(checkingUsername);
  usersApi.getUserByUsername(username)
    .then(({ doesNotExist }) => {
      if (doesNotExist) {
        console.log('New User', username);
        dispatch(usernameChecked(true));
      } else {
        dispatch(usernameChecked(false));
      }
    })
    .catch(err => dispatch(loadingUserFailed(err)));
};

export const createUser = username => async (dispatch, getState) => {
  const currentUser = getCurrentUser(getState());

  dispatch(creatingUser);
  usersApi.createUser(currentUser.name, currentUser.email, username).then(user => {
    dispatch({ type: SET_CURRENT_USER, user: { ...currentUser, ...user } });
    dispatch(navTo(MENU_ROUTE));
  });
};
