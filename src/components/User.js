import React from 'react';

import TodoItem from './TodoItem';
import todosData from '../data/todos';


const User = ({ user }) => {
  const personatedTasks = todosData
    .filter(task => task.userId === user.id);

  return (
    <div className="table__user-performance">
      <div className="user-info">
        <div className="user-info_content">
          <h2>{user.name}</h2>
          <p>Company: "{user.company.name}"</p>
          <span>
            <p>Address: {user.address.city},</p>
            <p>
              {user.address.street}, {user.address.suite}.
            </p>
            zipcode: {user.address.zipcode}
          </span>
          <p>username: {user.username}</p>
          <p>e-mail: {user.email}</p>
          <p>phone: {user.phone}</p>
          <p>
            website:
            <a href=" "> www.{user.website}</a>
          </p>
        </div>
      </div>
      <div className="task-info">
        {personatedTasks.map(task => (
          <TodoItem key={task.id} todos={task} />
        ))}
      </div>
    </div>
  );
};

export default User;
