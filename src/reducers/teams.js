import { 
  CREATE_TEAM,
  CREATE_TEAM_SUCCESS,
  CREATE_TEAM_FAILURE,
} from '../actions/teams';

const initialState = {
  creatingTeam: false,
  creatingTeamSuccess: false,
  creatingTeamError: null,
}
export default function(state = initialState, action) {

  switch(action.type) {
  
  case CREATE_TEAM:
    return {
      ...state,
      creatingTeam: true,
      creatingTeamSuccess: false,
      creatingTeamError: null,
    }
  case CREATE_TEAM_SUCCESS:
    return {
      ...state,
      creatingTeam: false,
      creatingTeamSuccess: true,
    }
  case CREATE_TEAM_FAILURE:
    return {
      ...state,
      creatingTeam: false,
      creatingTeamError: action.payload,
    }
  default: 
    return state;
  }
}