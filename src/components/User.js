import React from 'react';

import TodoItem from './TodoItem';
import todosData from '../data/todos';


const User = props => {

  const personatedTasks = todosData
    .map(task => <TodoItem key={task.userId} todos={task} />)
    .map(task => (task = task.props.todos))
    .filter(task => task.userId === props.user.id)
    .map(task => <TodoItem key={task.userId} todos={task} />);

  return (
    <div className="table__user-performance">
      <div className="user-info">
        <div className="user-info_content">
          <h2>
            {props.user.name} <br />
          </h2>
          <p>
            <i>Company:</i> <b>"{props.user.company.name}"</b>
          </p>
          <span>
            <p>
              <i>Address:</i> {props.user.address.city},
            </p>
            <p>
              {props.user.address.street}, {props.user.address.suite}.
            </p>
            zipcode: {props.user.address.zipcode}
          </span>
          <p>
            <i>
              username: <b>{props.user.username}</b>{" "}
            </i>
          </p>
          <p>
            <i>e-mail:</i> <u>{props.user.email}</u>
          </p>
          <p>
            <i>phone:</i> {props.user.phone}
          </p>
          <p>
            <i>website: </i>
            <a href=" "> www.{props.user.website}</a>
          </p>
        </div>
      </div>
      <div className="task-info">{personatedTasks}</div>
    </div>
  );
};

export default User;
