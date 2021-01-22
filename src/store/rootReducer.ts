import { combineReducers } from 'redux';
import { appReducer } from './reducers/appReducer';

export const rootReducer = combineReducers({
  todos: appReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
