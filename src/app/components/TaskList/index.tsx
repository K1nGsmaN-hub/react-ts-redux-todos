import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../store/rootReducer';
import { ITodo } from '../../../store/reducers/appReducer';

import TaskItem from '../TaskItem';

import { TaskListWrapper } from './styles';

const TaskList: React.FC<IProps> = ({ todos }) => {
  return (
    <TaskListWrapper>
      {todos.map((item) => (
        <TaskItem key={item.id} data={item} />
      ))}
    </TaskListWrapper>
  );
};

interface IProps {
  todos: ITodo[];
}

const mapStateToProps = (state: RootState) => ({
  todos: state.todos.todosArr,
});

export default connect(mapStateToProps)(TaskList);
