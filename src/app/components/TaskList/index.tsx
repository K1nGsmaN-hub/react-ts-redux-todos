import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../store/rootReducer';

import TaskItem from '../TaskItem';
import { ITodo } from '../../../store/reducers/appReducer';

const TaskList: React.FC<IProps> = ({ todos }) => {
  return (
    <div className="task-list">
      {todos.map((item) => (
        <TaskItem key={item.id} data={item} />
      ))}
    </div>
  );
};

interface IProps {
  todos: ITodo[];
}

const mapStateToProps = (state: RootState) => ({
  todos: state.todos.todosArr,
});

export default connect(mapStateToProps)(TaskList);
