import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

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
import { login } from '../../auth'
import routes from '../../routes'
import { failure } from '../../state/actions'

const { moviesList } = routes.app

const AccountPrompt = ({ text, apiEndpoint, pageHeader, linkText, link }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { apiUrl } = useConfiguration()
  const history = useHistory()
  const dispatch = useDispatch()

  const isFormInvalid = !username || !password

  async function onSubmit(e) {
    const sanitizedUsername = username.trim().toLowerCase()
    e.preventDefault()
    setIsLoading(true)
    const body = {
      username: sanitizedUsername,
      password,
    }
    try {
      const response = await fetch(`${apiUrl}/${apiEndpoint}`, {
        method: 'POST',
        body: JSON.stringify(body),
      })

      const data = await response.json()
      if (data.access_token) {
        await login(data.access_token)
        setIsLoading(false)
        history.push(moviesList)
      } else {
        dispatch(failure(data.message))
        setIsLoading(false)
      }
    } catch (error) {
      setIsLoading(false)
      console.log('error', error)
    }
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
