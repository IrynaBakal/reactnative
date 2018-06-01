export function reposHasErrored(bool) {
  console.log('ACTION [REPOS_HAS_ERRORED]', bool);
  return {
    type: 'REPOS_HAS_ERRORED',
    hasErrored: bool
  };
}
export function reposIsLoading(bool) {
  console.log('ACTION [REPOS_IS_LOADING]', bool);
  return {
    type: 'REPOS_IS_LOADING',
    isLoading: bool
  };
}
export function reposFetchDataSuccess(repos) {
  console.log('ACTION [REPOS_FETCH_DATA_SUCCESS]', repos);
  return {
    type: 'REPOS_FETCH_DATA_SUCCESS',
    repos
  };
}

export function fetchRepos() {
  console.log('ACTION [FETCH_REPOS]');
  return { type: 'FETCHED_REPOS' }
}

export function fetchRepoDetailed(fullname) {
  console.log('ACTION [FETCHED_REPO_DETAILED]', fullname);
  return { type: 'FETCHED_REPO_DETAILED', fullname }
}