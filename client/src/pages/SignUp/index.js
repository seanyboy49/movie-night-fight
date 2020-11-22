import React, { useState } from 'react'
import { useConfiguration } from '../../providers/Configuration'

const Signup = () => {
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
      const response = await fetch(`${apiUrl}/signup`, {
        method: 'POST',
        body: JSON.stringify(body),
      })

      console.log('response', response)
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <>
      <h2>Sign up!</h2>
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
        <button onClick={onSubmit}>Sign Up!</button>
      </form>
    </>
  )
}

export default Signup
