import { all } from 'redux-saga/effects';
import { playerGamesWatcher, gameWatcher } from './game';

export default function* rootSaga() {
  yield all([
    playerGamesWatcher(),
    gameWatcher()
  ]);
}
