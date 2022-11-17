
import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom';

function UserDetail() {
 
    const {id}=useParams();
    const [details,setDetails]=useState(null);
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>res.json())
        .then((data)=>setDetails(data))
        .finally(setLoading(false))
    },[id])

  return (
    <div>
        <h2>Kullanıcı Detayları</h2>
        {loading && <p>Yükleniyor...</p>}
        <pre>
            {details && JSON.stringify(details,null,2)}
        </pre>
        <Link to={`/users/${Number(id)+1}`}>Sonraki kullanıcı</Link>
    </div>
  )
}

export default UserDetail