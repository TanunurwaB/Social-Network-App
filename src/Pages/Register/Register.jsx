import React from 'react'
import "./register.scss"
import { Link } from "react-router-dom";



const Register = () => {
  return (
    <div className='register'>
    <div className="card">
      <div className="right">
        <h1>REGISTER</h1>
        <form action="submit">
          <input type="text" placeholder='UserName' />
          <input type="Email" placeholder='Email' />
          <input type="text" placeholder='Name' />
          <input type="password" placeholder='Password' />  
          <button>Sign Up</button>
        </form>
      </div>
      <div className="left">
        <h1>Hello World</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta iusto eveniet facere maiores sapiente, enim, aspernatur  fugiat expedita. quis expedita.</p>
        <span>Already  have an Account ?</span>
        <Link to="/login">
       <button>Login</button>
       </Link>
       </div>
    </div>
    </div>
  )
}

export default Register