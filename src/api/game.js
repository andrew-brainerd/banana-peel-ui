import { prop } from 'ramda';
import { client } from './tools';

export const loadPlayerGames = async username => {
  const response = await client.get('/games', { params: { username } })
    .then(prop('data'))
    .catch(err => console.error(err));

  return response;
};

export const loadGame = async gameId => {
  const response = await client.get(`/games/${gameId}`)
    .then(prop('data'))
    .catch(err => console.error(err));

  return response;
};
