import React, {useState} from 'react';
import Todo from './Todo';
import './TodoList.scss';

const TodoList = () => {
    const [sampleData, setSampleDate] = useState([
        {id:0, contents: "장판 무늬갯수 세기", complete: true},
        {id:1, contents: "누워서 티비보기", complete: false},
    ]);

    return (
        <div className="todo-list">
            {sampleData.map(item => <Todo id={item.id} contents={item.contents} complete={item.complete} key={item.id} />)}
        </div>
    );
};

export default TodoList;
