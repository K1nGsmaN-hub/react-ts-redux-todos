import styled from 'styled-components';
import { shadowActive } from '../../../variables';

export const TaskItemWrapper = styled.div`
  position: relative;
  width: 100%;

  padding: 20px;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: ${shadowActive};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  &:not(:last-child) {
    margin-bottom: 30px;
  }

  & > div.task-number {
    width: 100%;

    font-size: 14px;
    line-height: 18px;
    color: #999;

    margin-bottom: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      border: none;
      background-color: transparent;
    }
  }

  & > div.task-text {
    text-align: left;
    font-size: 16px;
    line-height: 22px;
    font-weight: bold;
    color: #000;
    margin-bottom: 10px;
  }

  & > div.task-controls {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  & > div.shadow {
    pointer-events: none;
    user-select: none;

    position: absolute;

    width: 100%;
    height: 100%;

    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

export const Button = styled.button<{ btnBG?: string; isActive?: boolean }>`
  padding: 5px 10px;

  border: none;
  border-radius: 5px;
  background: ${(props) => props.btnBG && props.btnBG} no-repeat;
  background-size: ${(props) => (props.isActive ? '100%' : '0%')};

  box-shadow: ${(props) => props.isActive && shadowActive};

  font-size: 14px;
  line-height: 18px;
  font-weight: bold;
  color: ${(props) => (props.isActive ? '#fff' : '#777')};

  transition: background-size 0.2s linear, color 0.2s linear,
    box-shadow 0.2s linear;

  &:hover {
    background-size: ${(props) => !props.isActive && '100%'};
    color: #fff;
    box-shadow: ${shadowActive};
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;
