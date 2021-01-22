import { ADD_TASK, DELETE_TASK } from '../types';
import { ITodo } from '../reducers/appReducer';

export const addTask = (todo: ITodo) => ({
  type: ADD_TASK,
  payload: todo,
});

export const deleteTask = (id: string) => ({
  type: DELETE_TASK,
  payload: id,
});
