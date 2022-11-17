import React from 'react'
import {Link, Outlet} from 'react-router-dom';
import "./styles.css"

function AuthLayout() {
  return (
    <div className='auth-container'>
      <div>
        <ul>
          <li>
            <Link to="">Giriş</Link>
          </li>
          <li>
            <Link to="register">Kayıt</Link>
          </li>
        </ul>
      </div>
<hr/>
    <Outlet/>

    </div>
  )
}

export default AuthLayout