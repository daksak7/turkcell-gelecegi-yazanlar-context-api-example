import React from 'react'

function Register() {
  return (
    <div className='auth-panel'>
        <h2>Kayıt Paneli</h2>
            <input placeholder='e-mail'></input>
            <input placeholder='şifre'></input>
            <button value={"kayit ol"} >KAYIT OL</button>
    </div>
  )
}

export default Register