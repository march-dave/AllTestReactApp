import {INCREMENT, DECREMENT, SET_DIFF} from '../actions';
import {combineReducers} from 'redux';

const counterInitialState = {
  value: 0,
  diff: 1
}

const counter = (state = counterInitialState, action) => {
    switch(action.type) {
      case INCREMENT: {
        return Object.assign( {}, state,  { value: state.value + state.diff})
      }
    }

}

const counterApp = combineReducers({
  counter
})

export default counterApp;
