import { call, put, all } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { reposFetchDataSuccess, reposHasErrored, reposIsLoading } from '../actions/repos';

export function* watchFetchRepos() {
  yield takeEvery('FETCHED_REPOS', fetchReposAsync);
}

function* fetchReposAsync() {
  try {
    yield put(reposIsLoading(true));
    const data = yield call(() => {
        return fetch('https://api.github.com/search/repositories?q=stars:>=10000+language:js&sort=stars&order=desc?page=2&per_page=100')
          .then(res =>  res.json())
      }
    );
    yield put(reposFetchDataSuccess(data.items));
    yield put(reposIsLoading(false));
  } catch (error) {
    yield put(reposIsLoading(false));
    yield put(reposHasErrored(true));
  }
}

export function* watchFetchDetailedRepo() {
  yield takeEvery('FETCHED_REPO_DETAILED', fetchRepoDetailedAsync);
}

function* fetchRepoDetailedAsync(params) {
  console.log('fetchRepoDetailedAsync', params);
  try {
    const data = yield call(() => {
      // return fetch('https://api.github.com/rate_limit')
      //return fetch('https://api.github.com/repos/freeCodeCamp/freeCodeCamp/pulls?state=all&?page=2&per_page=10')
      return fetch(`https://api.github.com/repos/${params.fullname}/pulls?state=all&?page=2&per_page=10`)
        .then(res =>  res.json())
      }
    );
    console.log(data);
  } catch (error) {
    console.info(error);
  }
}

export function* rootSaga() {
  yield all([
    watchFetchRepos(),
    watchFetchDetailedRepo()
  ])
}