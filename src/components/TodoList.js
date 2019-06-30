import React from 'react';

import TodoItem from './TodoItem';
import User from './User';

import usersData from '../task/users';
import todosData from "../task/todos";

const TodoList = () => {
  const userComponents = usersData.map(item => (
    <User key={item.id} user={item} />
  ));

  const todoComponents = todosData.map(item => 
  <TodoItem key={item.userId} todos={item} />);
  
  // const filteredTodos = todoComponents.filter(
  //   e => e.userId === 2
  // );

  // console.log(userComponents);
  // console.log(todoComponents.filter(e=> e.userId === 2));
  
  return (
    <table>
      <th>NAMES</th>
      <th>TODO</th>
      <tr>
        {userComponents}
        <td>{todoComponents}</td>
      </tr>
    </table>
  );
}

export default TodoList;