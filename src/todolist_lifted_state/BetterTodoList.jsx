import React from "react";
import AddTodoItem from "./AddTodoItem";
import Todo from "../todolist/Todo";
import TodoItem from "../todolist/TodoItem";

function BetterTodoList() {

    // if multiple components require the same state (values), 
    // we put the state in the highest parent component which requires that state
    // otherwise we should put the state only in the component that needs it

    const [todos, setTodos] = React.useState([ 
        new Todo(1, "Feed dog", "HIGH"), 
        new Todo(2, "Cook tea", "HIGH"), 
        new Todo(3, "Rick roll mother", "HIGH"), 
        new Todo(4, "Learn about politics", "LOW") 
    ]); 
    
    return ( 
        <div> 
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
            <AddTodoItem setTodos={setTodos} />
        </div> 
    ); 
}

export default BetterTodoList;