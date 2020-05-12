import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { getTechSuccess, getTechFailure } from './actions';
export function* getTechs() {
  try {
    const response = yield call(api.get, 'techs');

    yield put(getTechSuccess(response.data));
  } catch (err) {
    yield put(getTechFailure());
  }
}
