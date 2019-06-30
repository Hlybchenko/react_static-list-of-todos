import React from 'react';

const TodoItem = props => (
  <tr>
    {/* <td>{props.todos.id}</td> */}
    <td>user_id:-{props.todos.userId}</td>
    <td>{props.todos.title}</td>
    <td>{props.todos.completed ? "V" : "--"}</td>
  </tr>
);


export default TodoItem;
