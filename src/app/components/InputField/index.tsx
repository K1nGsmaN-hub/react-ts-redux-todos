import * as React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../../store/actions/appAction';

import { generateID } from '../../services/generateID';
import { idLength } from '../../../variables';

import { InputFieldWrapper } from './styles';

class InputField extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  state: IState = {
    taskText: '',
  };

  changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState((prev: IState) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!this.state.taskText) {
      return undefined;
    }

    const newTask = {
      id: generateID(idLength),
      text: this.state.taskText,
      isComplete: false,
      labels: [],
      comments: [],
    };

    this.props.addTask(newTask);

    this.setState({ taskText: '' });
  };

  render() {
    const { taskText } = this.state;

    return (
      <InputFieldWrapper>
        <form onSubmit={this.submitHandler}>
          <input
            type={'text'}
            placeholder={'Введите Вашу задачу...'}
            value={taskText}
            name={'taskText'}
            onChange={this.changeHandler}
          />

          <button type={'submit'}>&#5125;</button>
        </form>
      </InputFieldWrapper>
    );
  }
}

interface IProps {
  addTask: any;
}

interface IState {
  taskText: string;
}

const mapDispatchToProps = {
  addTask,
};

export default connect(null, mapDispatchToProps)(InputField);
