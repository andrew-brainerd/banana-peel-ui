import { prop } from 'ramda';
import { client } from './tools';

export const createUser = async (name, email) => {
  const response = await client.post('/users', { name, email });

  return prop('data', response);
};

export const getUserByEmail = async email => {
  console.log('Get User', email);
  const response = await client.get('/users/email', { params: { email } });

  return prop('data', response);
};
