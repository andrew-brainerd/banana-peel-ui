import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from '../api/game';
import { gamesLoaded, gameLoaded, LOAD_GAMES, LOAD_GAME } from '../actions/game';

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

export function* loadGame({ gameId }) {
  try {
    const response = yield call(api.loadGame, gameId);
    if (response) {
      yield put(gameLoaded(response));
    }
  } catch (err) {
    console.error(err);
  }
}

export function* playerGamesWatcher() {
  yield takeLatest(LOAD_GAMES, loadPlayerGames);
}

export function* gameWatcher() {
  yield takeLatest(LOAD_GAME, loadGame);
}
