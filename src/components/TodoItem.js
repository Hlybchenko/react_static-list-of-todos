import React from 'react';

// import usersData from '../task/users';
// import todosData from "../task/todos";
// // import User from './User';

const TodoItem = props => (
  <tr>
    <td>{props.todos.id}</td>
    <td>{props.todos.userId}</td>
    <td>{props.todos.title}</td>
    <td>{props.todos.completed ? "Done !!!" : "...in progres..."}</td>
  </tr>
);


export default TodoItem;
