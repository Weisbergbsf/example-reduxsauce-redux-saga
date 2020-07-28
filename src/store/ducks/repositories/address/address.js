import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  fetchAddressStart: [],
  fetchAddressError: ["error"],
  fetchAddressSuccess: ["address"],
  fetchAddress: ["cep"],
});

const INITIAL_STATE = {
  loading: false,
  address: null,
  error: null,
};

const fetchStart = (state = INITIAL_STATE) => {
  return { ...state, loading: true };
};

const fetchrror = (state = INITIAL_STATE, action) => {
  return { ...state, error: action.error, loading: false };
};

const fetchSuccess = (state = INITIAL_STATE, action) => {
  return { ...state, address: action.address, loading: false };
};

const fetchAddress = (state = INITIAL_STATE, action) => {
  return { ...state, address: action.address };
};

export default createReducer(INITIAL_STATE, {
  [Types.FETCH_ADDRESS_START]: fetchStart,
  [Types.FETCH_ADDRESS_ERROR]: fetchrror,
  [Types.FETCH_ADDRESS_SUCCESS]: fetchSuccess,
  [Types.FETCH_ADDRESS]: fetchAddress,
});
