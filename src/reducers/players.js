import { 
  CREATE_PLAYER,
  CREATE_PLAYER_SUCCESS,
  CREATE_PLAYER_FAILURE, 
} from '../actions/players';

const initialState = {
  creatingPlayer: false,
  creatingPlayerSuccess: false,
  creatingPlayerError: null,
}
export default function(state = initialState, action) {

  switch(action.type) {
  
  case CREATE_PLAYER:
    return {
      ...state,
      creatingPlayer: true,
      creatingPlayerSuccess: false,
      creatingPlayerError: null,
    }
  case CREATE_PLAYER_SUCCESS:
    return {
      ...state,
      creatingPlayer: false,
      creatingPlayerSuccess: true,
    }
  case CREATE_PLAYER_FAILURE:
    return {
      ...state,
      creatingPlayer: false,
      creatingPlayerError: action.payload,
    }
  default: 
    return state;
  }
}