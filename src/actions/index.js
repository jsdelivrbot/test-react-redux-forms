import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=wiziple';

export function fetchPost() {
  const url = `${ROOTURL}/posts${API_KEY}`;
  const request = axios.get(url);

  return {
    type:FETCH_POSTS,
    payload: request
  }
}