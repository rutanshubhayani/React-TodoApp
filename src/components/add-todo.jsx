import React, { useState } from 'react'
function AddTodo() {
    const [isTodo, setTodo] = useState([])
    const [value, setValue] = useState("")


    const handleChange = (event) => {
        setValue(event.target.value)
    }
    const handleAddTodo = () => {
        if (!value) {
            console.log("Please enter a task");
            return
        }
        setTodo([...isTodo, value])
        setValue("")
        console.log("Button clicked", value)
    }

    const DeleteTodo = (index) => {
        console.log("Delete button clicked");
        setTodo(isTodo.filter((_, i) => i !== index));
    };

    return (
        <>
            <h2>To Do List</h2>
            <input className='Input' value={value} onChange={handleChange} type="text" placeholder="Add a new task" />
            <button onClick={handleAddTodo}>Add</button>
            <ul style={{textAlign: 'left'}}>
                {isTodo.map((a, index) => (
                    <li key={index}>
                        {a}
                        <button onClick={() => DeleteTodo(index)} style={{ marginLeft: '10px' }}>X</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default AddTodo