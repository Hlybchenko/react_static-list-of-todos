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



// function TodoList() {
//   const list = todosData.map(todo =>
//     usersData.map(item => {
//       if (item.id === todo.userId) {
//         return (
//           <table className="todo-list-item">
//           <th>NAME</th>
//           <th>TODO</th>

//             <tr>
//               <User key={item.id} user={item} />
//               <td>
//                 {" "}
//                 <TodoItem key={todo.userId} todos={item} />
//               </td>
//             </tr>
//           </table>
//         );
//       }
//     })
//   );

//   return <div>{list}</div>;
// }



