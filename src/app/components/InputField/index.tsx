import * as React from 'react';

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

interface IProps {}

interface IState {
  taskText: string;
}

export default InputField;