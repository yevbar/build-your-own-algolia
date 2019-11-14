import { createStore } from 'redux';

const initialState = {
  query: ''
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case 'QUERY':
      return {
        query: action.payload
      }
    default:
      return state;
  }
}

const store = createStore(reducer, initialState);

export default store;
