import React, { useEffect, useState } from 'react';
import './Todo.css'

const Todo = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setTodos(data))
    }, [])
    return (
        <div>
            <h1>Total Todo: {todos.length}</h1>
            <div className='todos'>
                {
                    todos.map(todo => <TodoTitle title={todo.title} completed={todo.completed ? 'true' : 'false'} id={todo.id} userId={todo.userId} key={todo.id}></TodoTitle>)
                }
            </div>
        </div>
    );
};

function TodoTitle(props) {
    return (
        <div className='todo'>
            <h3>Title: {props.title}</h3>
            <h3>ID: {props.id}</h3>
            <h3>User Id: {props.userId}</h3>
            <h2>Completed: {props.completed}</h2>
        </div>
    )
}

export default Todo;