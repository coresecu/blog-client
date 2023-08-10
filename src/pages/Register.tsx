import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input required type="text" name="" id="" placeholder='username'/>
        <input required type="email" name="" id="" placeholder='email'/>
        <input required type="password" name="" id="" placeholder='password'/>
        <button>Login</button>
        <p>This is an error.</p>
        <span>Do you have an account? <Link to='/login'>Register</Link></span>
      </form>
    </div>
  )
}

export default Register
