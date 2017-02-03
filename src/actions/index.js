export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_DEF = 'SET_DEF';

export function increment() {
  return {
    type: INCREMENT
  };
}

export function decrement() {
  return {
    type: DECREMENT
  };
}

export function setDiff(diff) {
  return {
    type: SET_DIFF,
    dff: value
  }
}
