import React from "react";
import Todo from "./Todo";
import TodoItem from "./TodoItem";

function TodoList() { 
    const [todos, setTodos] = React.useState([ 
        new Todo(1, "Feed dog", "HIGH"), 
        new Todo(2, "Cook tea", "HIGH"), 
        new Todo(3, "Rick roll mother", "HIGH"), 
        new Todo(4, "Learn about politics", "LOW") 
    ]); 

    // these variables are used by a form for tracking changes
    // to the new todo input fields
    const [task, setTask] = React.useState(null);
    const [priority, setPriority] = React.useState("HIGH");
    
    function addTodo(event) { 
        event.preventDefault(); 
        // create a new todo using the values of the state we are tracking
        const todo = new Todo(Math.floor(Math.random() * 5000), task, priority); 
        
        setTodos(previousState => { 
            // use the spread operator to copy all of the items in the previous state of
            // todos into a new array, and we then also supply the new todo into the new array
            return [...previousState, todo]; 
        }); 
    }

    function handleChange(event) {
        // get the name attribute of the element that changed
        const name = event.target.name;
        // get the value of the element that changed
        const value = event.target.value;

        // decide which piece of state to update
        switch (name) {
            case "task":
                setTask(value);
                break;
            case "priority":
                setPriority(value);
        }
    }
    
    return ( 
        <div> 
            {/* This table renders the todo lists currently tracked in state */}
            <table> 
                <thead> 
                    <tr>
                        <th>Task</th> 
                        <th>Priority</th> 
                    </tr>
                </thead> 
                <tbody> 
                    {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
                </tbody> 
            </table> 

            {/* this form is for adding new todos */}
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
        </div> 
    ); 
}

export default TodoList;