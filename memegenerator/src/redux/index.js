
import { combineReducers } from 'redux';
import memesReducer from './memes';

const rootReducer = combineReducers({
  memes: memesReducer,
});

export default rootReducer;
