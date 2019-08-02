import {
  FETCH_DATA_PENDING,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
} from '../actions/types';

export default function githubDataReducer(
  state = { data: [], loading: false, error: null },
  action
) {
  switch (action.type) {
    case FETCH_DATA_PENDING:
      return { ...state, loading: true };
    case FETCH_DATA_SUCCESS:
      return { data: action.payload, loading: false, error: null };
    case FETCH_DATA_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
