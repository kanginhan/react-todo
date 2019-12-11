import React from 'react';
import './TodoInput.scss';
import {FaPlus} from "react-icons/fa";

const TodoInput = () => {
    return (
        <div className="todo-input">
            <input className="box" type="text" placeholder="할 일을 입력하세요"></input>
            <div className="btn-create">
                <FaPlus/>
            </div>
        </div>
    );
};

export default TodoInput;