import React from 'react';

const TodoListTable = function() {
    return (
        <table>
            <thead>
                <tr>
                    <th>Todo</th>
                    <th>Priority</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Buy dog food</td>
                    <td>HIGH</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td>Total todo items:</td>
                    <td>1</td>
                </tr>
            </tfoot>
        </table>
    );
}

export default TodoListTable;