export const initialState = {
  repos: [],
  isLoading: false,
  hasErrored: false,
};

export function reposHasErrored(state = initialState.hasErrored, action) {
  switch (action.type) {
    case 'REPOS_HAS_ERRORED':
      console.log('[REDUCER] reposHasErrored returns >>> ',action.hasErrored,state);
      return action.hasErrored;
    default:
      return state;
  }
}
export function reposIsLoading(state = initialState.isLoading, action) {
  console.log('[REDUCER] reposIsLoading', action);
  switch (action.type) {
    case 'REPOS_IS_LOADING':
      console.log('[REDUCER] reposIsLoading returns >>> ',action.isLoading,state);
      return action.isLoading;
    default:
      return state;
  }
}
export function repos(state = initialState.repos, action) {
  console.log('[REDUCER] repos', action);
  switch (action.type) {
    case 'REPOS_FETCH_DATA_SUCCESS':
      console.log('[REDUCER] repos returns >>> ',action.repos,state);
      return action.repos;
    default:
      return state;
  }
}