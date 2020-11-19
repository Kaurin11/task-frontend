import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import {Provider} from 'react-redux';
import {createStore,combineReducers ,applyMiddleware} from 'redux';
import reducer from './store/reducers/reducer';
import showTaskReducer from './store/reducers/showTaskReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  reducer : reducer,
  showTaskReducer : showTaskReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
