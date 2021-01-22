import * as React from 'react';
import { deleteTask } from '../../../store/actions/appAction';

import { TaskItemWrapper, Button } from './styles';
import {
  greenGradient90,
  lightBlueGradient90,
  redGradient90,
} from '../../../variables';
import { ITodo } from '../../../store/reducers/appReducer';
import { connect } from 'react-redux';

const TaskItem: React.FC<IProps> = ({
  data: { id, text, isComplete },
  deleteTask,
}) => {
  return (
    <TaskItemWrapper>
      <div className="task-number">
        <span>Задача #1</span>
        <button>
          <i className="far fa-edit" />
        </button>
      </div>

      <div className="task-text">{text}</div>

      <div className="task-controls">
        <Button btnBG={greenGradient90} isActive={true}>
          {isComplete ? 'Сделать активной' : 'Завершиить'}
        </Button>
        <Button btnBG={redGradient90} onClick={() => deleteTask(id)}>
          Удалить
        </Button>
        {!isComplete && <Button btnBG={lightBlueGradient90}>Закрепить</Button>}
      </div>

      {isComplete && <div className="shadow" />}
    </TaskItemWrapper>
  );
};

interface IProps {
  data: ITodo;
  deleteTask: any;
}

const mapDispatchToProps = {
  deleteTask,
};

export default connect(null, mapDispatchToProps)(TaskItem);
