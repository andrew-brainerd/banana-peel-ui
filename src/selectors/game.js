import { path, prop, compose } from 'ramda';

export const getGame = prop('game');

export const getIsLoadingGames = path(['game', 'isLoadingGames']);

export const getIsLoadingGame = path(['game', 'isLoadingGame']);

export const getPlayerGames = path(['game', 'playerGames']);

export const getGameId = path(['game', 'gameId']);

export const getSelectedGame = path(['game', 'selectedGame']);

export const getSelectedGameStats = compose(prop('stats'), getSelectedGame);
