import React, { useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom'

import { login, useAuth } from '../../auth'
import { useConfiguration } from '../../providers/Configuration'

const Signup = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [logged] = useAuth()
  const { apiUrl } = useConfiguration()
  const history = useHistory()

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

      const { access_token } = await response.json()

      await login(access_token)
      history.push('/movies-list')
    } catch (error) {
      console.log('error', error)
    }
  }

  if (logged) {
    return <Redirect to="/movies-list" />
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
