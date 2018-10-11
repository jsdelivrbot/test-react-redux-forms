import axios from 'axios';

export const CREATE_TEAM = 'CREATE_TEAM';
export const CREATE_TEAM_SUCCESS = 'CREATE_TEAM_SUCCESS';
export const CREATE_TEAM_FAILURE = 'CREATE_TEAM_FAILURE';

//put it to config file
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=wiziple';

export const createTeam = (values) => 
  dispatch => {
  // change URL
  const url = `${ROOT_URL}/posts/${API_KEY}`;
  
  dispatch({ type: CREATE_TEAM })
  
  axios.post(url, values).then(response => {

    // change to your response structure
    if (response.status === 201) {
      dispatch({ type: CREATE_TEAM_SUCCESS, payload: response.data })
    } else {
      dispatch({ type: CREATE_TEAM_FAILURE, payload: response })
    }
  })
  .catch(e => dispatch({ type: CREATE_TEAM_FAILURE, payload: e }))
  }