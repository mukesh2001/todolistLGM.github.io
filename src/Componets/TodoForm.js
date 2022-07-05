import React ,{useState} from 'react';

export default function TodoForm(props){
//state
const [input, setInput] = useState('');


const handleChange = e =>{
    setInput (e.target.value)
}

const handleSubmit = (e) => {
    e.preventDefault();
    props.addTask({
        id: Math.floor(Math.random()*1000000),
        text:input,
        isComplete: false
    })
    setInput(' ')
}     
    return<div>
        <h1>My To-Do-LIST</h1>
    <form className="todo-form">
        <input type="text" placeholder='Add a todo' onChange={handleChange} ClassName="todo-input" value={input} name="text"  />
        <button type="submit" onClick={handleSubmit} className="todo-btn">ADD TODO</button>
    </form>
    </div>
}