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

    return (
        <>
            <input className='Input' value={value} onChange={handleChange} type="text" placeholder="Add a new task"  />
            <button onClick={handleAddTodo}>Add</button>
            <ul>
                {isTodo.map((a, index) => (
                    <li key={index}>
                        {a}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default AddTodo