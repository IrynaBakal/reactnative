import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { initialState } from '../reducers/repos';
import { rootSaga } from '../sagas/sagas';
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware(initialState);
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
  );

sagaMiddleware.run(rootSaga);

export default store;