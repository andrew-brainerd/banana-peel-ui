import {
  LOADING_GAMES,
  GAMES_LOADED,
  GAME_LOADED,
  LOADING_GAME
} from '../actions/game';

export const initialState = {
  isLoadingGames: false,
  isLoadingGame: false,
  playerGames: [],
  selectedGame: null
};

const game = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_GAMES:
      return {
        ...state,
        isLoadingGames: true,
        isGameOver: false
      };
    case GAMES_LOADED:
      return {
        ...state,
        isLoadingGames: false,
        isLoadingGame: false,
        playerGames: action.games
      };
    case LOADING_GAME:
      return {
        ...state,
        isLoadingGame: true
      };
    case GAME_LOADED:
      return {
        ...state,
        isLoadingGame: false,
        selectedGame: action.game
      };
    default:
      return state;
  }
};

export default game;
