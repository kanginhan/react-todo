import React from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInput from './components/TodoInput';

const App = () => {
  return (
    <div>
      <TodoTemplate>
        <TodoInput/>
        <div>목록1</div>
      </TodoTemplate>
    </div>
  );
};

export default App;