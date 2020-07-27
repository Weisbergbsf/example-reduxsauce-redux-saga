import { put } from "redux-saga/effects";

import axios from "axios";
import { Creators } from "./address";

export function* loadAddressSaga(action) {
  yield put(Creators.loadAddressStart())

  try {
    const response = yield axios.get(`https://viacep.com.br/ws/${action.cep}/json/`)
    yield put(Creators.loadAddressSuccess(response.data))

  } catch (error) {
    yield put(Creators.loadError(error))
  }
}
