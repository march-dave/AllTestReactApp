import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import './index.css';

// action
const INCREMENT = 'INCREMENT';
function increase(diff) {
  return {
    type: INCREMENT,
    addBy: diff
  }
}

// reducer
const initialState = {
  value: 0
}
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
          value: state.value + action.addBy
      });
      default:
        return state;
  }
}

const store = createStore(counterReducer);

class myApp extends React.Component {

  onClick() {
    this.props.store.dispatch(increase(1));
  }

  render() {
    return(

      <div onClick={this.onClick.bind(this)}>
        <h1>{this.props.store.getState().value}111</h1>
      </div>
    );
  }
}

const render = () => {

    const appElement = document.getElementById('root');
    ReactDOM.render(
        <App store={store}/>,
        appElement
    );
};

store.subscribe(render);
render();

// const render = () => {
//   ReactDOM.render(
//     <myApp/>,
//     document.getElementById('root')
//   );
// };
//
// store.subscribe(render);
// render();
