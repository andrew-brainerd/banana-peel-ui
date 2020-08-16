import * as usersApi from '../api/users';

const PREFIX = 'USERS';

export const LOADING_USER = `${PREFIX}/LOADING_USER`;
export const LOADING_USER_FAILED = `${PREFIX}/LOADING_USER_FAILED`;
export const SET_CURRENT_USER = `${PREFIX}/SET_CURRENT_USER`;
export const LOADING_USERS = `${PREFIX}/LOADING_USERS`;
export const USERS_LOADED = `${PREFIX}/USERS_LOADED`;

export const loadingUser = { type: LOADING_USER };
export const loadingUserFailed = err => ({ type: LOADING_USER_FAILED, err });
export const loadingUsers = { type: LOADING_USERS };
export const usersLoaded = users => ({ type: USERS_LOADED, users });

export const setCurrentUser = user => async dispatch => {
  dispatch(loadingUser);
  usersApi.getUserByEmail(user.email)
    .then(({ doesNotExist, ...userData }) => {
      if (doesNotExist) {
        // usersApi.createUser(user.name, user.email);
        console.log('New User', user);
      }
      dispatch({ type: SET_CURRENT_USER, user: { ...user, ...userData } });
    })
    .catch(err => dispatch(loadingUserFailed(err)));
};
