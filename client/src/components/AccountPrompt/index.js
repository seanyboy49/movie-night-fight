import React from 'react'

import Button from '../Button'
import { Form, FormContainer, Input } from './styled'
import { H2 } from '../../styles/Text'

const AccountPrompt = ({ text, onSubmit, isLoading, isDisabled, page }) => {
  return (
    <FormContainer>
      <H2>{page}</H2>
      <Form>
        <Input type="text" placeholder="Username" />
        <Input
          type="password"
          placeholder="Password"
          autoComplete="new-password"
        />
        <Button
          text={text}
          onSubmit={onSubmit}
          isLoading={isLoading}
          isDisabled={isDisabled}
        />
      </Form>
    </FormContainer>
  )
}

export default AccountPrompt
