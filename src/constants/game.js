export const SOLO_GAME = 'solo';
export const VERSUS_GAME = 'versus';

export const ONES = 'ones';
export const TWOS = 'twos';
export const THREES = 'threes';
export const FOURS = 'fours';
export const FIVES = 'fives';
export const SIXES = 'sixes';
export const KIND3 = 'kind3';
export const KIND4 = 'kind4';
export const FULL_HOUSE = 'fullHouse';
export const SM_STRAIGHT = 'smStraight';
export const LG_STRAIGHT = 'lgStraight';
export const KIND5 = 'kind5';
export const CHANCE = 'chance';

export const emptyScoreboard = {
  [ONES]: -1,
  [TWOS]: -1,
  [THREES]: -1,
  [FOURS]: -1,
  [FIVES]: -1,
  [SIXES]: -1,
  [KIND3]: -1,
  [KIND4]: -1,
  [FULL_HOUSE]: -1,
  [SM_STRAIGHT]: -1,
  [LG_STRAIGHT]: -1,
  [KIND5]: -1,
  [CHANCE]: -1
};

export const saveGameProperties = [
  'isGameOver',
  'currentPlayer',
  'currentRoll',
  'currentRollNum',
  'currentScores',
  'player1',
  'player2'
];

export const SMS_INVITE = 'sms';
export const EMAIL_INVITE = 'email';
