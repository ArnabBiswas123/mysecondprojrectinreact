// import React from 'react';
import { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [userslist,setuserslist]=useState([])
  const AddUseHandler=(username,uage)=>{
      setuserslist((previousList)=>{
           return [...previousList,{name:username,age:uage,id:Math.random().toString()}]
      })
  }
  return (
    <div>
        <AddUser onAddUser={AddUseHandler}/>
        <UserList users={userslist}/>
    </div>
  );
}

export default App;
