import { combineReducers } from 'redux';
import { repos, reposHasErrored, reposIsLoading } from './repos';

export default combineReducers({
  repos,
  isLoading: reposIsLoading,
  hasErrored: reposHasErrored,
});

