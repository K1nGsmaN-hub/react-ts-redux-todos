import * as React from 'react';

import { AppWrapper, Container } from './styles';
import InputField from './components/InputField';
import TaskItem from './components/TaskItem';

const App: React.FC = () => {
  return (
    <Container>
      <AppWrapper>
        <h1>TODOS</h1>

        <InputField />

        <TaskItem isComplete={true} />
        <TaskItem isComplete={false} />
      </AppWrapper>
    </Container>
  );
};

export default App;
