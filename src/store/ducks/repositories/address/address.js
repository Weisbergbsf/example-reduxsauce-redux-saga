import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  loadAddressStart: [],
  loadAddressError: ["error"],
  loadAddressSuccess: ["address"],
  loadAddress: ["cep"],
});

const INITIAL_STATE = {
  loading: false,
  address: null,
  error: null,
};

const loadStart = (state = INITIAL_STATE) => {
  return { ...state, loading: true };
};

const loadError = (state = INITIAL_STATE, action) => {
  return { ...state, error: action.error, loading: false };
};

const loadSuccess = (state = INITIAL_STATE, action) => {
  return { ...state, address: action.address, loading: false };
};

const load = (state = INITIAL_STATE, action) => {
  return { ...state, address: action.address };
};

export default createReducer(INITIAL_STATE, {
  [Types.LOAD_ADDRESS_START]: loadStart,
  [Types.LOAD_ADDRESS_ERROR]: loadError,
  [Types.LOAD_ADDRESS]: load,
  [Types.LOAD_ADDRESS_SUCCESS]: loadSuccess,
});
