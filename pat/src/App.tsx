import React from 'react';
import { useState, useEffect } from 'react'; 
import './App.css';
import List from './components/List';
import Form from './components/Form';
import { User } from './types';

const usersData = [
  {
    name: 'John Doe',
    age: 25,
    avatar: 'https://i.pravatar.cc/150?img=10',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    name: 'Jane Doe',
    age: 22,
    avatar: 'https://i.pravatar.cc/150?img=1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    name: 'John Smith',
    age: 30,
    avatar: 'https://i.pravatar.cc/150?img=17',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    name: 'Jane Smith',
    age: 28,
    avatar: 'https://i.pravatar.cc/150?img=18',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
]



interface UsersState {  
  users: Array<User>;
  newUser: Array<User>;
}

function App() {
  const [users, setUsers] = useState<UsersState["users"]>([]);
  const [onNewUser, setNewUser] = useState<UsersState["newUser"]>([])

  useEffect(() => {
    setUsers(usersData);
  }, []);


  return (
    <div className="App">
      <Form onNewUser={setNewUser}/>
      <List 
      users={users}
       />
    </div>
  );
}

export default App;
