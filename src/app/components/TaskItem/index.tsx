import * as React from 'react';

import { TaskItemWrapper, Button } from './styles';
import {
  greenGradient90,
  lightBlueGradient90,
  redGradient90,
} from '../../../variables';

const TaskItem: React.FC<IProps> = ({ isComplete }) => {
  return (
    <TaskItemWrapper>
      <div className="task-number">
        <span>Задача #1</span>
        <button>
          <i className="far fa-edit" />
        </button>
      </div>

      <div className="task-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
        qui? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem,
        dolorum?
      </div>

      <div className="task-controls">
        <Button btnBG={greenGradient90} isActive={true}>
          {isComplete ? 'Сделать активной' : 'Завершиить'}
        </Button>
        <Button btnBG={redGradient90}>Удалить</Button>
        {!isComplete && <Button btnBG={lightBlueGradient90}>Закрепить</Button>}
      </div>

      {isComplete && <div className="shadow" />}
    </TaskItemWrapper>
  );
};

interface IProps {
  isComplete: boolean;
}

export default TaskItem;
