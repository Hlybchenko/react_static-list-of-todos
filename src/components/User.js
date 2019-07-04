import React from 'react';

import TodoItem from './TodoItem';
import todosData from '../data/todos';


const User = props => {
  const personatedTasks = todosData
    .map(task => <TodoItem key={task.id} todos={task} />)
    .map(task => (task = task.props.todos)) 
    .filter(task => task.userId === props.user.id)
    .map(task => <TodoItem key={task.id} todos={task} />);

  return (
    <div className="table__user-performance">
      <div className="user-info">
        <div className="user-info_content">
          <h2>
            {props.user.name}
          </h2>
          <p>Company: "{props.user.company.name}"</p>
          <span>
            <p>Address: {props.user.address.city},</p>
            <p>{props.user.address.street}, {props.user.address.suite}.</p>
            zipcode: {props.user.address.zipcode}
          </span>
          <p>username: {props.user.username}</p>
          <p>e-mail: {props.user.email}</p>
          <p>phone: {props.user.phone}</p>
          <p>website:
          <a href=" "> www.{props.user.website}</a>
          </p>
        </div>
      </div>
      <div className="task-info">{personatedTasks}</div>
    </div>
  );
};

export default User;
