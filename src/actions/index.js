import axios from 'axios';
import { FETCH_USER, RESET_DEPT_LIST } from './types';

export const fetchUser = ({ orgID, parent }) => async dispatch => {
  // console.log('What a joke');
  console.log(orgID, parent);
  dispatch({ type: RESET_DEPT_LIST, payload: parent });
  const res = await axios.get('http://localhost:8080/orghierarchy/' + orgID);
  dispatch({ type: FETCH_USER, payload: res.data });
};
