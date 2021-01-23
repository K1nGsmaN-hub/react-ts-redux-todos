import {
  ADD_TASK,
  DELETE_TASK,
  DISABLE_IS_COMPLETE_STATUS,
  ENABLE_IS_COMPLETE_STATUS,
} from '../types';

const initialState: IState = {
  todosArr: [],
};

export const appReducer = (state: IState = initialState, action: IAction) => {
  switch (action.type) {
    case ADD_TASK:
      action.payload.taskNumber = state.todosArr.length + 1;

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

    case ENABLE_IS_COMPLETE_STATUS:
      return {
        ...state,
        todosArr: changeIsComplete(state.todosArr, action.payload, true),
      };

    case DISABLE_IS_COMPLETE_STATUS:
      return {
        ...state,
        todosArr: changeIsComplete(state.todosArr, action.payload, false),
      };
    default:
      return state;
  }
};

const changeIsComplete = (arr: ITodo[], id: string, bool: boolean) => {
  const newArr: ITodo[] = JSON.parse(JSON.stringify(arr));

  newArr.forEach((todo) => {
    if (todo.id === id) todo.isComplete = bool;
  });

  console.log(newArr);

  return newArr;
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
  taskNumber: number;
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
