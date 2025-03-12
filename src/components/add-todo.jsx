import React, { useState, useEffect } from 'react';

function AddTodo() {
    const [isTodo, setTodo] = useState([]);
    const [value, setValue] = useState("");
    const [idCounter, setIdCounter] = useState(1); // Start ID from 1

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleAddTodo = () => {
        if (!value) {
            console.log("Please enter a task");
            return;
        }

        const id = {
            id: idCounter,
            text: value
        };

        setTodo([...isTodo, id]);
        setValue("");
        setIdCounter(idCounter + 1); 
    };

    const DeleteTodo = (id) => {
        setTodo(isTodo.filter((task) => task.id !== id));
    };

    useEffect(() => {
        console.log("List:", isTodo);
    }, [isTodo]);

    return (
        <>
            <h2>To Do List</h2>
            <input className='Input' value={value} onChange={handleChange} type="text" placeholder="Add a new task" />
            <button onClick={handleAddTodo}>Add</button>
            <ul style={{ textAlign: 'left' }}>
                {isTodo.map((task) => (
                    <li key={task.id}>
                        <strong>{task.id}.</strong> {task.text}
                        <button onClick={() => DeleteTodo(task.id)} style={{ marginLeft: '10px' }}>X</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default AddTodo;
