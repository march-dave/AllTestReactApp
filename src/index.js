import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import './index.css';

// Action
const INCREMENT = 'INCREMENT';
function increase(diff) {
  return {
    type: INCREMENT,
    addBy: diff
  };
}

// Reducer
const initialState = {
  value: 0
};

const counterReducer = (state=initialState, action) => {
  switch(action.type) {
      case INCREMENT: 
        return Object.assign({}, state, {
          value: state.value + action.addBy
        });
        default:
          return state;
  }
}

// Store
const store = createStore(counterReducer);



ReactDOM.render(<
    App /> ,
    document.getElementById('root')
);