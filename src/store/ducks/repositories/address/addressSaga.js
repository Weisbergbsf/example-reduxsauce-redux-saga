import { put, call } from "redux-saga/effects";

import axios from "axios";
import { Creators } from "./address";

export function* loadAddressSaga(action) {
  yield put(Creators.fetchAddressStart())

  try {
    const response = yield call(() => axios.get(`https://viacep.com.br/ws/${action.cep}/json/`))
    yield put(Creators.fetchAddressSuccess(response.data))

  } catch (error) {
    yield put(Creators.fetchAddressError(error))
  }
}
