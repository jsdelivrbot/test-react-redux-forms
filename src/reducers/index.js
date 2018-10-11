import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PlayersReducer from './players';
import TeamsReducer from './teams';

const rootReducer = combineReducers({
  players: PlayersReducer,
  teams: TeamsReducer,
  form: formReducer
});

export default rootReducer;
