import React from 'react'
import { Link } from "react-router-dom";
import "./login.scss"

const Login = () => {
  return (
    <div className='login'>
    <div className="card">
      <div className="left">
        <h1>Hello World</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta iusto eveniet facere maiores sapiente, enim, aspernatur  fugiat expedita. quis expedita.</p>
        <span>Do you have an Account ?</span>
        <Link to="/register">
        <button>Register</button>
        </Link>
      </div>
      <div className="right">
        <h1>LOGIN</h1>
        <form action="submit">
          <input type="text" placeholder='UserName' />
          
          <input type="password" placeholder='Password' />  

          <button>LOGIN</button>
        </form> 
      </div>
    </div>
    </div>
  )
}

export default Login