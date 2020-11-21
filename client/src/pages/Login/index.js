import React, { useState } from 'react'

const Login = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  function onSubmit() {
    console.log('submit')
  }

  console.log('userName', userName)
  console.log('password', password)
  return (
    <>
      <h2>Login</h2>
      <form>
        <div>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button onClick={onSubmit}>Login Now</button>
      </form>
    </>
  )
}

export default Login
