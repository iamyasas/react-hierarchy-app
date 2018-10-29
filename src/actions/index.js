import axios from 'axios';
import { FETCH_USER, RESET_DEPT_LIST, FETCH_POSTS } from './types';

export const fetchUser = ({ orgID, parent }) => async dispatch => {
  dispatch({ type: RESET_DEPT_LIST, payload: parent });
  const res = await axios.get('http://localhost:8080/orghierarchy/' + orgID);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchPosts = (pageNo) => async dispatch => {
  const res = await axios.get('http://localhost:8080/post', { params: { pageNo: pageNo } });
  dispatch({ type: FETCH_POSTS, payload: res.data });
}
