import React from 'react';

import User from './User';
import usersData from '../data/users';


const TodoList = () => (
    <div>
      <header className="header">
        <h1> List of TODOS </h1>
      </header>
      <main className="table">
        {usersData.map(user => (
          <User key={user.id} user={user} />
        ))}
      </main>
    </div>
  );

export default TodoList;
