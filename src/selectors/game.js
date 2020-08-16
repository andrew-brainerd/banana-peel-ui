import { path, prop } from 'ramda';

export const getGame = prop('game');

export const getIsLoadingGames = path(['game', 'isLoadingGames']);

export const getIsLoadingGame = path(['game', 'isLoadingGame']);

export const getPlayerGames = path(['game', 'playerGames']);

export const getGameId = path('game', 'gameId');
