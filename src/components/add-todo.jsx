import React, { useState, useEffect } from 'react';

function AddTodo() {
    const [todoList, setTodoList] = useState([]);
    const [value, setValue] = useState("");
    const [idCounter, setIdCounter] = useState(1); 
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleAddTodo = () => {
        if (!value) {
            console.log("Please enter a task");
            return;
        }

        const todo = {
            id: idCounter,
            text: value
        };

        setTodoList([...todoList, todo]);
        setValue("");
        setIdCounter(idCounter + 1); 
    };

    const deleteTodo = (id) => {
        setTodoList(todoList.filter((task) => task.id !== id));
    };

    useEffect(() => {
        console.log("List:", todoList);
    }, [todoList]);

    return (
        <>
            <h2>To Do List</h2>
            <input className='Input' value={value} onChange={handleChange} type="text" placeholder="Add a new task" />
            <button onClick={handleAddTodo}>Add</button>
            <ul style={{ textAlign: 'left' }}>
                {todoList.map((task) => (
                    <li key={task.id}>
                        <strong>{task.id}.</strong> {task.text}
                        <button onClick={() => deleteTodo(task.id)} style={{ marginLeft: '10px' }}>X</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default AddTodo;














// 1.Create edit button.
// 2.Keep edit button in all todos.
// 3.Handle edit button click and add todo value in input box.
// 4.Change add button to update button.
// 5.Handle user input.
// 6.Update todo in the list on click of update button.
// 7.Clear input box after update todo and change update button to add button. 
