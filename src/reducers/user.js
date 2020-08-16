import { LOADING_USER, SET_CURRENT_USER } from '../actions/user';

export const initialState = {
  isLoadingUser: false,
  currentUser: {}
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_USER:
      return {
        ...state,
        isLoadingUser: true
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        isLoadingUser: false,
        currentUser: action.user
      };
    default:
      return state;
  }
};

export default user;
