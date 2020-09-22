import { all } from 'redux-saga/effects';
import { playerGamesWatcher } from './game';

export default function* rootSaga() {
  yield all([
    playerGamesWatcher()
  ]);
}
