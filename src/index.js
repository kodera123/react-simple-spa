import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer/reducer'

import client from 'axios'
import thunk from 'redux-thunk'

import './index.css';
import App from './App';
import App2 from './App2';
import * as serviceWorker from './serviceWorker';

// ブラウザ履歴保存用のストレージを作成
const history = createHistory()

// axiosをthunkの追加引数に加える
const thunkWithClient = thunk.withExtraArgument(client)
// redux-thunkをミドルウェアに適用
const store = createStore(reducer, applyMiddleware(thunkWithClient))

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);
ReactDOM.render(<App2 />, document.getElementById('root2'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
