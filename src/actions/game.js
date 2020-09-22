const PREFIX = 'GAME';

export const LOAD_GAMES = `${PREFIX}/LOAD_GAMES`;
export const GAMES_LOADED = `${PREFIX}/GAMES_LOADED`;
export const LOAD_GAME = `${PREFIX}/LOAD_GAME`;
export const GAME_LOADED = `${PREFIX}/GAME_LOADED`;

export const loadGames = player => ({ type: LOAD_GAMES, player });
export const gamesLoaded = games => ({ type: GAMES_LOADED, games });
export const loadGame = gameId => ({ type: LOAD_GAME, gameId });
export const gameLoaded = game => ({ type: GAME_LOADED, game });
