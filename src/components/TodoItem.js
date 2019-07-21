import React from 'react';

const TodoItem = ({ todos }) => (
  <section className="todos">
    <div className="task">{todos.title}</div>

    <div className="status">    
      <input type="checkbox" defaultChecked={todos.completed}/>   
    </div>
  </section>
);

export default TodoItem;
