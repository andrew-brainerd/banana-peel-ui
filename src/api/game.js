import { prop } from 'ramda';
import { client } from './tools';

export const loadPlayerGames = async connectCode => {
  const response = await client.get('/games', { params: { connectCode: connectCode.replace('-', '#') } })
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
