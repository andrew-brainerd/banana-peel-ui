const isValidHex = new RegExp('^[0-9a-fA-F]{24}$');

const isValidGameId = gameId => {
  return gameId !== undefined && gameId !== null && isValidHex.test(gameId);
};

export default isValidGameId;
