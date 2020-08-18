import * as gameApi from '../api/game';

const PREFIX = 'GAME';

export const LOADING_GAMES = `${PREFIX}/LOADING_GAMES`;
export const GAMES_LOADED = `${PREFIX}/GAMES_LOADED`;
export const LOADING_GAME = `${PREFIX}/LOADING_GAME`;
export const GAME_LOADED = `${PREFIX}/GAME_LOADED`;

export const loadingGames = { type: LOADING_GAMES };
export const gamesLoaded = games => ({ type: GAMES_LOADED, games });
export const loadingGame = { type: LOADING_GAME };
export const gameLoaded = game => ({ type: GAME_LOADED, game });

export const loadPlayerGames = username => async dispatch => {
  console.log('Loading Player Games', username);
  dispatch(loadingGames);
  username && gameApi.loadPlayerGames(username).then(({ items }) => {
    dispatch(gamesLoaded(items));
  });
};

export const loadGame = gameId => async dispatch => {
  dispatch(loadingGame);
  gameApi.loadGame(gameId).then(game =>
    dispatch(gameLoaded(game))
  );
};
