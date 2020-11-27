import React from 'react'

import Button from '../Button'
import { Form, FormContainer, Input, AccountP, PromptContainer } from './styled'
import { H2 } from '../../styles/Text'
import { logout, useAuth } from '../../auth'

const AccountPrompt = ({
  text,
  onSubmit,
  isLoading,
  isDisabled,
  pageHeader,
  pageText,
  setUsername,
  setPassword,
}) => {
  const [logged] = useAuth()

  return (
    <PromptContainer>
      {logged ? (
        <Button text={'logout'} onSubmit={logout} />
      ) : (
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
              isDisabled={isDisabled}
            />

            <AccountP>{pageText}</AccountP>
          </Form>
        </FormContainer>
      )}
    </PromptContainer>
  )
}

export default AccountPrompt
