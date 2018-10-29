import { FETCH_USER, RESET_DEPT_LIST } from '../actions/types';
import _ from 'lodash';

export default function (state = [], action) {

  switch (action.type) {
    case FETCH_USER:
      return [...state, action.payload];
    case RESET_DEPT_LIST:
      return resetDeptList(state, action.payload);
    default:
      return state;
  }
}

function resetDeptList(state, deptID) {
  var index = _.findIndex(state, ['id', deptID]);
  if (index === -1) {
    return state;
  }
  var newState = _.take(state, index + 1)
  return [...newState];
}
