import {
  LOADING_GAMES,
  GAMES_LOADED,
  GAME_LOADED,
  LOADING_GAME
} from '../actions/game';
import { emptyScoreboard } from '../constants/game';

export const initialState = {
  isLoadingGames: false,
  isLoadingGame: false,
  playerGames: []
};

const game = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_GAMES:
      return {
        ...state,
        isLoadingGames: true,
        isGameOver: false,
        playerGames: []
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
        isLoadingGame: true,
        isPlaying: false,
        isGameOver: false,
        currentPlayer: null,
        gameId: '',
        type: '',
        player1: emptyScoreboard,
        player2: emptyScoreboard,
        _id: ''
      };
    case GAME_LOADED:
      return {
        ...state,
        isLoadingGame: false,
        isCreatingGame: false,
        isPlaying: true,
        ...action.game
      };
    default:
      return state;
  }
};

export default game;
