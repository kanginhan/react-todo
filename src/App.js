import React from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div>
      <TodoTemplate>
        <TodoInput/>
        <TodoList/>
      </TodoTemplate>
    </div>
  );
};

export default App;
