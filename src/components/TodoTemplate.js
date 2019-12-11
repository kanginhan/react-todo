import React from 'react';
import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
  return (
    <div className="contents">
        <div className="title">일정 관리</div>
        <div className="body">{children}</div>
      </div>
  );
};

export default TodoTemplate;
