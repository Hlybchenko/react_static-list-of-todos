import React from 'react';

const TodoItem = ({ todos }) => (
  <section className="todos">
    <div className="task">{todos.title}</div>

    <div className="status">
      {todos.completed ? (
        <>
          <label>
            <input type="checkbox" checked />
          </label>
        </>
      ) : (
        <>
          <label>
            <input type="checkbox" />
          </label>
        </>
      )}
    </div>
  </section>
);

export default TodoItem;
