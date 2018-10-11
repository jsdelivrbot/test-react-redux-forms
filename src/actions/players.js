import axios from 'axios';

export const CREATE_PLAYER = 'CREATE_PLAYER';
export const CREATE_PLAYER_SUCCESS = 'CREATE_PLAYER_SUCCESS';
export const CREATE_PLAYER_FAILURE = 'CREATE_PLAYER_FAILURE';

//put it to config file
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=wiziple';
  
export const createPlayer = values => 
  dispatch => {
  
  // change URL
  const url = `${ROOT_URL}/posts/${API_KEY}`;
  
  dispatch({ type: CREATE_PLAYER })
  
  axios.post(url, values).then(response => {

    // change to your response structure
    if (response.status === 201) {
      dispatch({ type: CREATE_PLAYER_SUCCESS, payload: response.data })
    } else {
      dispatch({ type: CREATE_PLAYER_FAILURE, payload: response })
    }
  })
  .catch(e => dispatch({ type: CREATE_PLAYER_FAILURE, payload: e }))
  }
