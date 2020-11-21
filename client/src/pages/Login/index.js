import React, { useState } from 'react'

import { useConfiguration } from '../../providers/Configuration'
import { login } from '../../auth'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { apiUrl } = useConfiguration()

  async function onSubmit(e) {
    e.preventDefault()
    const body = {
      username,
      password,
    }
    try {
      const response = await fetch(`${apiUrl}/login`, {
        method: 'POST',
        body: JSON.stringify(body),
      })

      const { access_token } = await response.json()
      login(access_token)
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <>
      <h2>Login</h2>
      <form>
        <div>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>

        <div>
          <input
            autoComplete="new-password"
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
