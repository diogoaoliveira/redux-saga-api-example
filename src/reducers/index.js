import { combineReducers } from 'redux';
import githubData from './githubDataReducer';

export default combineReducers({
  repos: githubData,
});
