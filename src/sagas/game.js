import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from '../api/game';
import { gamesLoaded, loadGames } from '../actions/game';

export function* loadPlayerGames({ player }) {
  try {
    const response = yield call(api.loadPlayerGames(player));
    console.log(response);
    yield put(gamesLoaded(response));
  } catch (err) {
    console.error(err);
  }
}

export function* playerGamesWatcher() {
  yield takeLatest(loadGames, loadPlayerGames);
}
