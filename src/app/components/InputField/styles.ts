import styled from 'styled-components';
import { shadow, shadowActive } from '../../../variables';

export const InputFieldWrapper = styled.div`
  margin-bottom: 30px;
  width: 100%;

  form {
    position: relative;

    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    width: 100%;
    height: 50px;

    padding: 15px 50px 15px 25px;

    border: none;
    border-radius: 10px;
    background-color: transparent;

    font-size: 16px;
    line-height: 22px;
    color: #000;

    box-shadow: ${shadow};
    box-sizing: border-box;

    transition: box-shadow 0.3s linear;

    &:active,
    &:focus {
      box-shadow: ${shadowActive};
    }

    ::placeholder {
      color: #999;
      font-style: italic;
    }
  }

  button {
    position: absolute;

    right: 0;
    top: 50%;

    transform: translateY(-50%);

    width: 50px;
    height: 50px;

    padding: 0;
    background-color: transparent;
    border: none;

    font-size: 16px;
    color: #999;

    box-sizing: border-box;
  }
`;
