import React, { useState } from 'react';

import AddUser from "./component/User/AddUser"
 import UserList from './component/User/UserList'
import Portal from "./Protal"
import Ref from './Ref'
function App() {
   
     const [userList , setUserList ] = useState([])

     const addUserHandler = (uName, uAge)=>{
      setUserList((preUserList) =>{
        return [...preUserList , {name: uName,  age:uAge , id:Math.random().toString()},
        ];
      });
     }
  return (
    <div>
    
      <AddUser onAddUser={addUserHandler}/>
     <UserList  users={userList}/>
     <Portal/>
     <Ref/>
    </div>
  );
}

export default App;
