import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { REQUEST_USER_DATA, receiveUserData } from './actions';
import { fetchData } from './api';

function* getUserData() {
  try {
    const data = yield call(fetchData);
    yield put(receiveUserData(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* mySaga() {
  yield takeLatest(REQUEST_USER_DATA, getUserData);
}
