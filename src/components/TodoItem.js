import React from 'react';

const TodoItem = props => (
  <div className="todos">
    <section className="task">
      {props.todos.title}
    </section>

    <section className="status">{
      props.todos.completed 
        ? "DONE !!!" 
        : "...in progres..."
      }
    </section>     
  </div>
);

export default TodoItem;
