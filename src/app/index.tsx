import * as React from 'react';

import { AppWrapper, Container } from './styles';
import InputField from './components/InputField';
import TaskList from './components/TaskList';

const App: React.FC = () => {
  return (
    <Container>
      <AppWrapper>
        <h1>TODOS</h1>

        <InputField />
        <TaskList />
      </AppWrapper>
    </Container>
  );
};

export default App;
