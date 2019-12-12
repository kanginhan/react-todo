import React from 'react';
import './Todo.scss';
import {FaRegSquare, FaRegTimesCircle} from 'react-icons/fa';

//FaRegCheckSquare
const Todo = ({id, contents, complete}) => {
    return (
        <div>
        <div className="todo">
            <FaRegSquare />
            <div className="content">{contents}</div>
            <FaRegTimesCircle size="1.2em" color="coral"/>
        </div>
        <hr/>
        </div>
    );
};

export default Todo;
