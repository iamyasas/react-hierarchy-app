import { FETCH_POSTS } from '../actions/types';

export default function (state = [], action) {
  console.log(action);
  switch (action.type) {
    case FETCH_POSTS:
      return [...state, ...action.payload];
    default:
      return state;
  }
}