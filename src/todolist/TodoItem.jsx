import React from "react";

// we are destructuring a todo property from props into
// a todo variable accessible inside this function
function TodoItem({ todo }) { 
    return ( 
        <tr> 
            <td>{todo.task}</td>
            <td>{todo.priority}</td>
        </tr>
    ); 
}

export default TodoItem;