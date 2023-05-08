import React, { useState } from 'react';
import './Login.css'




function LoginForm({ signUpUrl }) {

const [username, setUser] = useState('');
const [password, setPass] = useState('');


const handleSubmit = (e) =>{
  e.preventDefault();

  fetch("http://localhost:3004/Login",{
      method: "POST",
      headers : {'Content-type':'application/json'},
      body: JSON.stringify({
          username,
          password
      })
  })
  .then((response) => {
      console.log(response);
  })
  .catch((err) => {
      console.log(err);
  });
}

const handleCancel = () => {
}

  return (
    <div className="form-container">
      <h2>Welcome back!</h2>
      <form action="" method="POST" onSubmit={handleSubmit} >
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required value={username} onChange={(e) => setUser(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required value={password} onChange={(e) => setPass(e.target.value)}/>
        </div>
        <div>
          <button type="submit">Login</button>
          <button type="button"  onClick={handleCancel} >Cancel</button>
        </div>
      </form>
      <p>
        Don't have an account?{' '}
        <a href={signUpUrl}>Sign up here</a>.
      </p>
    </div>
  );
}

export default LoginForm;
