import { all, takeLatest } from "redux-saga/effects";
import { Types } from "./repositories/address/address";
import { loadAddressSaga } from "./repositories/address/addressSaga";

export function* whatchAddress() {
  yield all([takeLatest(Types.FETCH_ADDRESS, loadAddressSaga)]);
}
