import React from 'react';

const TodoItem = props => (
  <section className="todos">
    <div className="task">
      {props.todos.title}
    </div>

    <div className="status">{
      props.todos.completed 
        ? "DONE !!!" 
        : "...in progres..."
      }
    </div>
  </section>
);

export default TodoItem;