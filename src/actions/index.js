import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = (orgID) => async dispatch => {
  //console.log('What a joke');
  console.log(orgID);
  const res = await axios.get('http://localhost:8080/orghierarchy/' + orgID);
  dispatch({ type: FETCH_USER, payload: res.data });
};
