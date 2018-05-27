import React, { Component } from 'react';
import Repos from './containers/repos.container';
import { Provider } from 'react-redux';
import store from './store/configureStore';

export default class Index extends Component {
  render() {
    console.log(store.getState(), 'STORE');
    return (
      <Provider store={store}>
        <Repos />
      </Provider>
    );
  }
}


