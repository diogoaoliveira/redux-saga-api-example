import { put, takeEvery } from 'redux-saga/effects';
import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_PENDING,
  FETCH_DATA_ERROR,
} from '../actions/types';
import Api from '../services/api';

function* fetchGithubData() {
  try {
    const res = yield Api.get('/repos');
    yield put({ type: FETCH_DATA_SUCCESS, payload: res.data });
  } catch (error) {
    yield put({ type: FETCH_DATA_ERROR, payload: error.message });
  }
}

export function* githubDataSaga() {
  yield takeEvery(FETCH_DATA_PENDING, fetchGithubData);
}
