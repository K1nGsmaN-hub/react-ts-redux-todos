import styled from 'styled-components';
import { redGradient180 } from '../variables';

export const Container = styled.div`
  max-width: 550px;
  width: 100%;
  min-height: 100vh;

  font-family: 'Nunito', sans-serif;

  margin: 0 auto;
`;

export const AppWrapper = styled.section`
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  & > h1 {
    margin: 30px 0 30px;
    font-size: 61px;
    line-height: 72px;
    font-weight: bold;
    background: ${redGradient180};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
