import { ADD_TASK, DELETE_TASK } from '../types';

const initialState: IState = {
  todosArr: [],
};

export const appReducer = (state: IState = initialState, action: IAction) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        todosArr: [...state.todosArr, action.payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        todosArr: state.todosArr.filter(
          (item: ITodo) => item.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

interface ILabel {
  id: string;
  name: string;
  color: string;
}

interface IComment {
  id: string;
  text: string;
}

export interface ITodo {
  id: string;
  text: string;
  isComplete: boolean;
  labels: ILabel[];
  comments: IComment[];
}

interface IAction {
  type: string;
  payload?: any;
}

interface IState {
  todosArr: ITodo[];
}
