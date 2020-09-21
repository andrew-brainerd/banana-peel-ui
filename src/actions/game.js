import * as gameApi from '../api/game';

const PREFIX = 'GAME';

export const LOAD_GAMES = `${PREFIX}/LOAD_GAMES`;
export const GAMES_LOADED = `${PREFIX}/GAMES_LOADED`;
export const LOADING_GAME = `${PREFIX}/LOADING_GAME`;
export const GAME_LOADED = `${PREFIX}/GAME_LOADED`;

export const loadGames = player => ({ type: LOAD_GAMES, player });
export const gamesLoaded = games => ({ type: GAMES_LOADED, games });
export const loadingGame = { type: LOADING_GAME };
export const gameLoaded = game => ({ type: GAME_LOADED, game });

export const loadGame = gameId => async dispatch => {
  dispatch(loadingGame);
  gameApi.loadGame(gameId).then(game =>
    dispatch(gameLoaded(game))
  );
};
