import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { useConfiguration } from '../../providers/Configuration'
import { login, logout, useAuth } from '../../auth'
import AccountPrompt from '../../components/AccountPrompt'
import { Background } from '../../styles/Background'
import Button from '../../components/Button'

const Login = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
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
      setIsLoading(false)
      history.push('/movies-list')
    } catch (error) {
      setIsLoading(false)
      console.log('error', error)
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
        pageHeader={'SIGN IN TO YOUR ACCOUNT'}
        pageText={'SIGN UP FOR AN ACCOUNT'}
        setUsername={setUsername}
        setPassword={setPassword}
      />
    </Background>
  )
}

export default Login
