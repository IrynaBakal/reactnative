import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { reposFetchDataSuccess, reposHasErrored, reposIsLoading } from '../actions/repos';

export function* watchFetchRepos() {
  yield takeEvery('FETCHED_REPOS', fetchReposAsync);
}

function* fetchReposAsync() {
  try {
    yield put(reposIsLoading(true));
    const data = yield call(() => {
        return fetch('https://api.github.com/search/repositories?q=stars:>=10000+language:js&sort=stars&order=desc')
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