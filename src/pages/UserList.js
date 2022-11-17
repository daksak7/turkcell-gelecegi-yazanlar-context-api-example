import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom";

function UserList() {
  const [users,setUsers]=useState([]);
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    setLoading(true)
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((data)=>setUsers(data))
    .finally(setLoading(false))
  },[])
  return (
    <div className='user-list'>
        <h2>Kullanıcılar</h2>
    {loading && <p>Yükleniyor</p>}
    <ul>
      {users.map((user)=>(
        <li key={user.id} > <Link  to={`${user.id}`}  >{user.name}</Link></li>
      ))}
    </ul>
    </div>
    
  )
}

export default UserList