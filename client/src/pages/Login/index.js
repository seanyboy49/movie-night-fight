import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { useConfiguration } from '../../providers/Configuration'
import { login, logout, useAuth } from '../../auth'
import Button from '../../components/Button'
import AccountPrompt from '../../components/AccountPrompt'
import { Background } from '../../styles/Background'

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

  return (
    <Background>
      <AccountPrompt
        text={'LOG IN'}
        onSubmit={onSubmit}
        isLoading={isLoading}
        isDisabled={isFormInvalid}
        page={'SIGN IN TO YOUR ACCOUNT'}
      />
      {/* <h2>Login</h2>
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
          <Button
            text={'LOG IN'}
            onSubmit={onSubmit}
            isLoading={isLoading}
            isDisabled={isFormInvalid}
          />
        </form>
      )} */}
    </Background>
  )
}

export default Login
