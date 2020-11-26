import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { useConfiguration } from '../../providers/Configuration'
import { login, logout, useAuth } from '../../auth'
import Button from '../../components/Button'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const [logged] = useAuth()
  const { apiUrl } = useConfiguration()
  const history = useHistory()

  async function onSubmit(e) {
    e.preventDefault()
    setIsLoading(true)
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
      history.push('/movies-list')
    } catch (error) {
      console.log('error', error)
    } finally {
      setIsLoading(false)
    }
  }

  const isFormInvalid = !username || !password
  console.log('isFormInvalid', isFormInvalid)

  return (
    <>
      <h2>Login</h2>
      {logged ? (
        <button onClick={logout}>Logout</button>
      ) : (
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

          {/* <button onClick={onSubmit}>Login Now</button> */}
          <Button
            text={'LOG IN'}
            onSubmit={onSubmit}
            isLoading={isLoading}
            isDisabled={isFormInvalid}
          />
        </form>
      )}
    </>
  )
}

export default Login
