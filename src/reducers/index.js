import { combineReducers } from 'redux';
import NotificationReducer from './NotificationReducer';
import AnimeListReducer from './AnimeListReducer';

const reducer = combineReducers({
  NotificationReducer: NotificationReducer,
  AnimeListReducer: AnimeListReducer,
});

export default reducer;