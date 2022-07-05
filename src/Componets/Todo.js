import React from 'react';
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiTick} from 'react-icons/ti'
//import Todo from './Todo'

export default function Todo({todos,completedTask,removeTask}) {
return todos.map((todo,index) => (
        <div className={todo.isComplete ? 'complete task-div' : 'task-div'} key={index}>
            <div className="todo-text">{todo.text}</div>
            <div className="icons" key={todo.id}>
            <TiTick className={todo.isComplete ? 'hide': 'tick'} onClick= {() => {completedTask(todo.id) }}></TiTick>
            <RiCloseCircleLine className='cross' onClick={() => {removeTask(todo.id) }}></RiCloseCircleLine>
            </div>
        </div>
    ))
}
