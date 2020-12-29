import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

import { useConfiguration } from '../../providers/Configuration'
import Button from '../Button'
import {
  Form,
  FormContainer,
  Input,
  PromptLink,
  PromptContainer,
} from './styled'
import { H2 } from '../../styles/Text'
import { login, useAuth } from '../../auth'

const AccountPrompt = ({ text, apiEndpoint, pageHeader, linkText, link }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { apiUrl } = useConfiguration()
  const history = useHistory()
  const [logged] = useAuth()

  const isFormInvalid = !username || !password

  async function onSubmit(e) {
    const trimmedUsername = username.trim()
    e.preventDefault()
    setIsLoading(true)
    const body = {
      username: trimmedUsername,
      password,
    }
    try {
      const response = await fetch(`${apiUrl}/${apiEndpoint}`, {
        method: 'POST',
        body: JSON.stringify(body),
      })

      const { access_token } = await response.json()
      await login(access_token)
      setIsLoading(false)
      history.push('/movies-list')
    } catch (error) {
      setIsLoading(false)
      console.log('error', error)
    }
  }

  if (logged) {
    history.push('/movies-list')
  }

  return (
    <PromptContainer>
      <FormContainer>
        <H2>{pageHeader}</H2>
        <Form>
          <Input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            autoComplete="new-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            text={text}
            onSubmit={onSubmit}
            isLoading={isLoading}
            isDisabled={isFormInvalid}
          />

          <PromptLink to={`${link}`}>{linkText}</PromptLink>
        </Form>
      </FormContainer>
    </PromptContainer>
  )
}

AccountPrompt.propTypes = {
  text: PropTypes.string.isRequired,
  apiEndpoint: PropTypes.string.isRequired,
  pageHeader: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default AccountPrompt
