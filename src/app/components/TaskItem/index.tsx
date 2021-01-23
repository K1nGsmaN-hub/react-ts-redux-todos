import * as React from 'react';
import {
  deleteTask,
  enableIsCompleteStatus,
  disableIsCompleteStatus,
} from '../../../store/actions/appAction';

import { TaskItemWrapper, Button } from './styles';
import {
  greenGradient90,
  lightBlueGradient90,
  redGradient90,
} from '../../../variables';
import { ITodo } from '../../../store/reducers/appReducer';
import { connect } from 'react-redux';

const TaskItem: React.FC<IProps> = ({
  data: { id, text, taskNumber, isComplete },
  deleteTask,
  enableIsCompleteStatus,
  disableIsCompleteStatus,
}) => {
  const activeButtons: IActiveButton[] = [
    {
      id: 1,
      text: 'Завершить',
      btnBG: greenGradient90,
      method: enableIsCompleteStatus,
      isComplete: false,
    },
    {
      id: 2,
      text: 'Сделать активной',
      btnBG: greenGradient90,
      method: disableIsCompleteStatus,
      isComplete: true,
    },
  ];

  return (
    <TaskItemWrapper>
      <div className="task-number">
        <span>Задача #{taskNumber}</span>
        <button>
          <i className="far fa-edit" />
        </button>
      </div>

      <div className="task-text">{text}</div>

      <div className="task-controls">
        {activeButtons.map(
          (btn) =>
            btn.isComplete === isComplete && (
              <Button
                btnBG={btn.btnBG}
                isActive={true}
                onClick={() => btn.method(id)}
                key={btn.id}
              >
                {btn.text}
              </Button>
            )
        )}

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
  enableIsCompleteStatus: any;
  disableIsCompleteStatus: any;
}

interface IActiveButton {
  id: number;
  text: string;
  btnBG: typeof greenGradient90 | string;
  method: any;
  isComplete: boolean;
}

const mapDispatchToProps = {
  deleteTask,
  enableIsCompleteStatus,
  disableIsCompleteStatus,
};

export default connect(null, mapDispatchToProps)(TaskItem);
