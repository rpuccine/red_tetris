import React from 'react'
import ReactDom from 'react-dom'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import {storeStateMiddleWare} from './middleware/storeStateMiddleWare'
import reducer from './reducers'
import App from './containers/app'
import {alert} from './actions/alert'
import {ping} from './actions/server'
//import io from 'socket.io-client'

const initialState = {}

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(thunk, createLogger())
)

ReactDom.render((
  <Provider store={store}>
    <App/>
  </Provider>
), document.getElementById('tetris'))

store.dispatch(alert('Soon, will be here a fantastic Tetris ...'))

const io = require('socket.io-client');
const socket = io('http://0.0.0.0:3004');

store.dispatch(ping());

socket.emit('action', {type: 'server/ping'});

function sum() {
    var args = [...arguments];
    var doubles = args.map(function(x) {
        return x * 2;
    });
    console.log(doubles);
}

function curry(nb_arg, func) {
	var expect_arg = nb_arg;
	return function recurse() {
        var args = [...arguments];
        if (args.length >= expect_arg) {
			func.apply(null, args);
            return ;
		}
        console.log("ret curse with " + args + ' ** ' + args.length);
        console.dir(args);
		return recurse.bind(null, args);
	};
}

var curry_add = curry(3, sum);
curry_add(1,2,3);
curry_add(4,5)(6);
curry_add(7)(8)(9);
curry_add(10)(11);
