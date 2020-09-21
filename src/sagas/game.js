import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from '../api/game';
import { gamesLoaded, LOAD_GAMES } from '../actions/game';

export function* loadPlayerGames({ player }) {
  try {
    const response = yield call(api.loadPlayerGames, player);
    if (response) {
      yield put(gamesLoaded(response.items));
    }
  } catch (err) {
    console.error(err);
  }
}

export function* playerGamesWatcher() {
  yield takeLatest(LOAD_GAMES, loadPlayerGames);
}
