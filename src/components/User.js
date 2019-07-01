import React from 'react';

import TodoItem from "./TodoItem";

import todosData from "../data/todos";


const User = props => {

  const todoComponents = todosData.map(
    task => <TodoItem key={task.userId} todos={task}/>
  );

  const personatedTasks = todoComponents
    .map(task =>task = task.props.todos)
    .filter(task => task.userId === props.user.id)
    .map(task => <TodoItem key={task.userId} todos={task}/>);

  return (
    <div className="table__user-performance">
      <section className="user-info">
        <div className="user-info_content">
          <h2>
            {props.user.name} <br />
          </h2>

          <i>Company:</i> <b>"{props.user.company.name}"</b>
          <br />
          
          <span>
            <i>Address:</i> {props.user.address.city},
            <br />
            {props.user.address.street}, {props.user.address.suite}. <br />
            zipcode: {props.user.address.zipcode}
          </span>
          <br />
          <br />
          
          <i>
            username: <b>{props.user.username}</b>{" "}
          </i>
          <br />
          
          <i>e-mail:</i> <u>{props.user.email}</u>
          <br />
          
          <i>phone:</i> {props.user.phone}
          <br />
          
          <i>website: </i>
          <a href="#"> www.{props.user.website}</a>

        </div>
      </section>

      <section className="task-info">
        {personatedTasks}
      </section>
    </div>
  );};

export default User;