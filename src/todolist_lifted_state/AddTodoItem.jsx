import React from "react";
import Todo from "../todolist/Todo";

// setTodos is a function passed in by a parent component
// for modifying state in that parent component
// - in this example, setTodos modifies the state of todos in BetterTodoList
function AddTodoItem({ setTodos }) {

    const [task, setTask] = React.useState(null);
    const [priority, setPriority] = React.useState("HIGH");

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name);
        switch (name) {
            case "task":
                setTask(value);
                break;
            case "priority":
                setPriority(value);
        }
    }

    function addTodo(event) { 
        event.preventDefault(); 
        const todo = new Todo(Math.floor(Math.random() * 5000), task, priority); 
        
        setTodos(previousState => { 
            return [...previousState, todo]; 
        }); 
    }

    return (
        <form onSubmit={addTodo}> 
            <label htmlFor="task">Task</label> 
            <input id="task" name="task" type="text" placeholder="Feed the dog" required onChange={handleChange} /> 
            
            <label htmlFor="priority">Priority</label> 
            <select id="priority" name="priority" size="2" defaultValue="HIGH" required onChange={handleChange}> 
                <option value="HIGH">High</option> 
                <option value="LOW">Low</option> 
            </select>
            <br /><br />
            <button type="submit">Add todo</button>
        </form> 
    );
}

export default AddTodoItem;