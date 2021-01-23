import {
  ADD_TASK,
  DELETE_TASK,
  DISABLE_IS_COMPLETE_STATUS,
  ENABLE_IS_COMPLETE_STATUS,
} from '../types';
import { ITodo } from '../reducers/appReducer';

export const addTask = (todo: ITodo) => ({
  type: ADD_TASK,
  payload: todo,
});

export const deleteTask = (id: string) => ({
  type: DELETE_TASK,
  payload: id,
});

export const enableIsCompleteStatus = (id: string) => ({
  type: ENABLE_IS_COMPLETE_STATUS,
  payload: id,
});
export const disableIsCompleteStatus = (id: string) => ({
  type: DISABLE_IS_COMPLETE_STATUS,
  payload: id,
});
