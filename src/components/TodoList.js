import React from 'react';

import User from './User';
import usersData from '../data/users';


const TodoList = () => {
  
  const userComponents = usersData.map(
    user => <User key={user.id} user={user} />
  );

  return (
    <div >
      <header className="header">
        <h1> List of TODOS </h1>
      </header>
      <main className="table">
        {userComponents}
      </main>
    </div>
  )
};

export default TodoList;
